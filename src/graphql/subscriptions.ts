/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreatePublicData = /* GraphQL */ `subscription OnCreatePublicData(
  $filter: ModelSubscriptionPublicDataFilterInput
) {
  onCreatePublicData(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePublicDataSubscriptionVariables,
  APITypes.OnCreatePublicDataSubscription
>;
export const onUpdatePublicData = /* GraphQL */ `subscription OnUpdatePublicData(
  $filter: ModelSubscriptionPublicDataFilterInput
) {
  onUpdatePublicData(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePublicDataSubscriptionVariables,
  APITypes.OnUpdatePublicDataSubscription
>;
export const onDeletePublicData = /* GraphQL */ `subscription OnDeletePublicData(
  $filter: ModelSubscriptionPublicDataFilterInput
) {
  onDeletePublicData(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePublicDataSubscriptionVariables,
  APITypes.OnDeletePublicDataSubscription
>;
export const onCreatePushToken = /* GraphQL */ `subscription OnCreatePushToken($filter: ModelSubscriptionPushTokenFilterInput) {
  onCreatePushToken(filter: $filter) {
    id
    token
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreatePushTokenSubscriptionVariables,
  APITypes.OnCreatePushTokenSubscription
>;
export const onUpdatePushToken = /* GraphQL */ `subscription OnUpdatePushToken($filter: ModelSubscriptionPushTokenFilterInput) {
  onUpdatePushToken(filter: $filter) {
    id
    token
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdatePushTokenSubscriptionVariables,
  APITypes.OnUpdatePushTokenSubscription
>;
export const onDeletePushToken = /* GraphQL */ `subscription OnDeletePushToken($filter: ModelSubscriptionPushTokenFilterInput) {
  onDeletePushToken(filter: $filter) {
    id
    token
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeletePushTokenSubscriptionVariables,
  APITypes.OnDeletePushTokenSubscription
>;
