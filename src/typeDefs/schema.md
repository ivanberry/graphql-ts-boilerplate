## Schema
An exact description of the data we can ask for

0. what fields can we select?
1. what kinds of objects might they return?
2. what fields are available on those sub-objects?


```graphql
type Character {
  name: String!
  appearsIn: [Episode]!
}
```

- Charater: GraphQL Object Type
- name/appearsIn: fileds of Charater
- String: build-in scalar type
- String!: non-nullable
- [Episode]!: non-nullable Episode array

```
type Starship {
    id: ID!
    name: String!
    length(unit: lengthUnit = METER): Float
}
```
Arguments can be either required or optional. When a argument is optianal, we can define a default value.

## The Query and Mutation types

Most types in your schema will just be normal object types, but there are two types that are special within a schema:

```
schema {
    query: Query
    mutation: Mutation
}
```
Every Graphql service has a `query` type and may or may not have a `mutation` type. These types are the same as a regular type, but they are special because they define the entry point of every GraphQL query.



