import Layout from '../../components/Main';

export default function Home() {
  return (
    <Layout>
      <p>
        На ezikTok.com се отнасяме с чувство на отговорност към личните ви
        данни. Ние не публикуваме, не продаваме и не споделяме личните ви данни
        с трети страни без вашето изрично съгласие. Само администраторите на
        сайта имат достъп до личните ви данни, които се използват само за
        улесняване на използването на сайта. Ако имате допълнителни въпроси за
        поверителността на личните ви данни, моля свържете се с нас.
      </p>
    </Layout>
  );
}
export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}
