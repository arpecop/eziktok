import { catBasicInfo, getSeoTerms } from "../../../utils/adshelper";
import { client, env, gquery } from "../../../data/graphql";

//import { Pagination } from "@/components/Pagination";
import Ad from "../../../components/ads/Ad";
import type { AdCategory } from "../../../data/ads";
import type { AdType } from "../../../data/ads";
import AdsLayout from "../../../components/Layouts/AdsLayout";
import CatButton from "../../../components/ads/CatButton";
//import data from "@/data/dataAll";
import { GetServerSideProps } from "next";
import Link from "next/link";
import Main from "../../../components/Layouts/Main";
import Meta from "../../../components/Layouts/Meta";
//import { Pagination } from '@/components/Pagination';
import TitleAds from "../../../components/ads/TitleAds";
import adsData from "~/json/adsData.json";

const CatId = ({
	cat,
	ads,
	catid,
	count,
	subcats,
	p,
}: {
	cat: AdCategory;
	ads: AdType[];
	subcats?: AdCategory[];
	catid: string;
	count: number;
	p: number;
}) => {
	return (
		<Main
			hideFooter={false}
			home="/ads/"
			meta={
				<Meta
					title={`${cat.name} - Обяви -купувам продавам - България`}
					description={`${cat.name} ${
						subcats
							? subcats.map((x) => x.name).join(" ")
							: "- Обяви -купувам продавам - България"
					} `}
				/>
			}
			sidebar={
				subcats
					? subcats.map(({ slug, name }) => (
							<div key={slug} className="float-left sm:float-none sm:my-1">
								<CatButton
									name={name}
									slug={slug}
									href={`/ads/cat/${slug}`}
									small={true}
									className="hidden sm:block"
								/>
								<Link
									prefetch={false}
									href={`/ads/cat/${slug}`}
									className="badge badge-accent m-0.5 block sm:hidden"
								>
									{name}
								</Link>
							</div>
					  ))
					: null
			}
		>
			<div className="relative  left-2  z-10">
				<TitleAds {...catBasicInfo(catid)} />
			</div>

			<AdsLayout cat={catid}>
				<div className="mt-4 grid gap-1">
					{ads.map(({ id, images, price, title }: AdType) => (
						<Ad
							key={id}
							id={id}
							images={images}
							price={price}
							title={title}
							long={true}
							data={{ nivo: "1" }}
							username="test"
						/>
					))}
				</div>

				{count > 10 && <div className="mt-4">pagination</div>}
				{p <= 1 && (
					<>
						<Link
							prefetch={false}
							href={{ pathname: `/ads/create/${catid}` }}
							className="btn-secondary btn btn-ghost mb-4 flex-1"
						>
							Публикувай Обява в {cat.name}
						</Link>
						<div className="mt-4">
							{getSeoTerms(catid).map(({ q, name }) => (
								<Link
									prefetch={false}
									href={`/ads/search/${q}`}
									key={q}
									passHref={true}
									className="badge badge-accent mr-1"
								>
									{name}
								</Link>
							))}
						</div>
					</>
				)}
			</AdsLayout>
		</Main>
	);
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	const { catid, p }: { catid?: string; p?: string } = query;

	const cat = catid ? catBasicInfo(catid) : null;

	const subcats =
		adsData
			.find((ad) => ad.slug === catid)
			?.items.map((item) => {
				return { slug: item.slug, name: item.name };
			}) || null;

	const ads = await client.query({
		query: gquery.ADS_QUERY_CAT_LISTALL,
		variables: {
			catid,
			type: env === "development" ? "ad" : "adprod",
		},
	});

	return {
		props: {
			cat,
			catid,
			ads: ads.data.adsByDate.items,
			subcats,
			count: 1,
			p: p || 1,
		},
	};
};

export default CatId;
