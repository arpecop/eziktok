query MyQuery($or: [ModelAdFilterInput] =  [{description: {contains: "example"}},{description: {contains: "test"}}]) {
    adsByDate(type: "ad1", filter: {or: $or}) {
      items {
        id
      }
    }
  }
  

  const insert = await API.graphql(
		graphqlOperation(mutations.createAd, {
			input: {
				type: process.env.NODE_ENV === "development" ? "ad1" : "ad1", // remove this
				title: "In this example, the mutation string defines a GraphQL",
				price: 20,
				condition: "NEW",
				cat: "",
				description:
					"11111 In this example, the mutation string defines a GraphQL mutation that accepts an input parameter. This input parameter is used to specify the input values for the mutation, such as the name and description of the new todo item. The mutation string also specifies the fields that you want to include in the returned data, such as the id, name, and description of the newly-created todo item. In this example, the mutation string defines a GraphQL mutation that accepts an input parameter. This input parameter is used to specify the input values for the mutation, such as the name and description of the new todo item. The mutation string also specifies the fields that you want to include in the returned data, such as the id, name, and description of the newly-created todo item. In this example, the mutation string defines a GraphQL mutation that accepts an input parameter. This input parameter is used to specify the input values for the mutation, such as the name and description of the new todo item. The mutation string also specifies the fields that you want to include in the returned data, such as the id, name, and description of the newly-created todo item.",
			},
		}),
	);
