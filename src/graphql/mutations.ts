/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createPublicData = /* GraphQL */ `mutation CreatePublicData(
  $input: CreatePublicDataInput!
  $condition: ModelPublicDataConditionInput
) {
  createPublicData(input: $input, condition: $condition) {
    id
    title
    description
    image
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreatePublicDataMutationVariables,
  APITypes.CreatePublicDataMutation
>;
export const updatePublicData = /* GraphQL */ `mutation UpdatePublicData(
  $input: UpdatePublicDataInput!
  $condition: ModelPublicDataConditionInput
) {
  updatePublicData(input: $input, condition: $condition) {
    id
    title
    description
    image
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdatePublicDataMutationVariables,
  APITypes.UpdatePublicDataMutation
>;
export const deletePublicData = /* GraphQL */ `mutation DeletePublicData(
  $input: DeletePublicDataInput!
  $condition: ModelPublicDataConditionInput
) {
  deletePublicData(input: $input, condition: $condition) {
    id
    title
    description
    image
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeletePublicDataMutationVariables,
  APITypes.DeletePublicDataMutation
>;
export const createPushToken = /* GraphQL */ `mutation CreatePushToken(
  $input: CreatePushTokenInput!
  $condition: ModelPushTokenConditionInput
) {
  createPushToken(input: $input, condition: $condition) {
    id
    token
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreatePushTokenMutationVariables,
  APITypes.CreatePushTokenMutation
>;
export const updatePushToken = /* GraphQL */ `mutation UpdatePushToken(
  $input: UpdatePushTokenInput!
  $condition: ModelPushTokenConditionInput
) {
  updatePushToken(input: $input, condition: $condition) {
    id
    token
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdatePushTokenMutationVariables,
  APITypes.UpdatePushTokenMutation
>;
export const deletePushToken = /* GraphQL */ `mutation DeletePushToken(
  $input: DeletePushTokenInput!
  $condition: ModelPushTokenConditionInput
) {
  deletePushToken(input: $input, condition: $condition) {
    id
    token
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeletePushTokenMutationVariables,
  APITypes.DeletePushTokenMutation
>;
