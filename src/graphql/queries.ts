/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getPublicData = /* GraphQL */ `query GetPublicData($id: ID!) {
  getPublicData(id: $id) {
    id
    title
    description
    image
    tags
    cookTime
    servingSize
    ingredients
    prepSteps
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetPublicDataQueryVariables,
  APITypes.GetPublicDataQuery
>;
export const listPublicData = /* GraphQL */ `query ListPublicData(
  $filter: ModelPublicDataFilterInput
  $limit: Int
  $nextToken: String
) {
  listPublicData(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      image
      tags
      cookTime
      servingSize
      ingredients
      prepSteps
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPublicDataQueryVariables,
  APITypes.ListPublicDataQuery
>;
export const getPushToken = /* GraphQL */ `query GetPushToken($id: ID!) {
  getPushToken(id: $id) {
    id
    token
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetPushTokenQueryVariables,
  APITypes.GetPushTokenQuery
>;
export const listPushTokens = /* GraphQL */ `query ListPushTokens(
  $filter: ModelPushTokenFilterInput
  $limit: Int
  $nextToken: String
) {
  listPushTokens(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      token
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPushTokensQueryVariables,
  APITypes.ListPushTokensQuery
>;
