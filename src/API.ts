/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePublicDataInput = {
  id?: string | null,
  title: string,
  description: string,
  image: string,
  tags?: Array< string | null > | null,
  cookTime?: number | null,
  servingSize?: number | null,
  ingredients?: Array< string | null > | null,
  prepSteps?: Array< string | null > | null,
};

export type ModelPublicDataConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  image?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  cookTime?: ModelIntInput | null,
  servingSize?: ModelIntInput | null,
  ingredients?: ModelStringInput | null,
  prepSteps?: ModelStringInput | null,
  and?: Array< ModelPublicDataConditionInput | null > | null,
  or?: Array< ModelPublicDataConditionInput | null > | null,
  not?: ModelPublicDataConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type PublicData = {
  __typename: "PublicData",
  id: string,
  title: string,
  description: string,
  image: string,
  tags?: Array< string | null > | null,
  cookTime?: number | null,
  servingSize?: number | null,
  ingredients?: Array< string | null > | null,
  prepSteps?: Array< string | null > | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdatePublicDataInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  image?: string | null,
  tags?: Array< string | null > | null,
  cookTime?: number | null,
  servingSize?: number | null,
  ingredients?: Array< string | null > | null,
  prepSteps?: Array< string | null > | null,
};

export type DeletePublicDataInput = {
  id: string,
};

export type CreatePushTokenInput = {
  id?: string | null,
  token: string,
};

export type ModelPushTokenConditionInput = {
  token?: ModelStringInput | null,
  and?: Array< ModelPushTokenConditionInput | null > | null,
  or?: Array< ModelPushTokenConditionInput | null > | null,
  not?: ModelPushTokenConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type PushToken = {
  __typename: "PushToken",
  id: string,
  token: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdatePushTokenInput = {
  id: string,
  token?: string | null,
};

export type DeletePushTokenInput = {
  id: string,
};

export type ModelPublicDataFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  image?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  cookTime?: ModelIntInput | null,
  servingSize?: ModelIntInput | null,
  ingredients?: ModelStringInput | null,
  prepSteps?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPublicDataFilterInput | null > | null,
  or?: Array< ModelPublicDataFilterInput | null > | null,
  not?: ModelPublicDataFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelPublicDataConnection = {
  __typename: "ModelPublicDataConnection",
  items:  Array<PublicData | null >,
  nextToken?: string | null,
};

export type ModelPushTokenFilterInput = {
  id?: ModelIDInput | null,
  token?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPushTokenFilterInput | null > | null,
  or?: Array< ModelPushTokenFilterInput | null > | null,
  not?: ModelPushTokenFilterInput | null,
};

export type ModelPushTokenConnection = {
  __typename: "ModelPushTokenConnection",
  items:  Array<PushToken | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionPublicDataFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  tags?: ModelSubscriptionStringInput | null,
  cookTime?: ModelSubscriptionIntInput | null,
  servingSize?: ModelSubscriptionIntInput | null,
  ingredients?: ModelSubscriptionStringInput | null,
  prepSteps?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPublicDataFilterInput | null > | null,
  or?: Array< ModelSubscriptionPublicDataFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionPushTokenFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  token?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPushTokenFilterInput | null > | null,
  or?: Array< ModelSubscriptionPushTokenFilterInput | null > | null,
};

export type CreatePublicDataMutationVariables = {
  input: CreatePublicDataInput,
  condition?: ModelPublicDataConditionInput | null,
};

export type CreatePublicDataMutation = {
  createPublicData?:  {
    __typename: "PublicData",
    id: string,
    title: string,
    description: string,
    image: string,
    tags?: Array< string | null > | null,
    cookTime?: number | null,
    servingSize?: number | null,
    ingredients?: Array< string | null > | null,
    prepSteps?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePublicDataMutationVariables = {
  input: UpdatePublicDataInput,
  condition?: ModelPublicDataConditionInput | null,
};

export type UpdatePublicDataMutation = {
  updatePublicData?:  {
    __typename: "PublicData",
    id: string,
    title: string,
    description: string,
    image: string,
    tags?: Array< string | null > | null,
    cookTime?: number | null,
    servingSize?: number | null,
    ingredients?: Array< string | null > | null,
    prepSteps?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePublicDataMutationVariables = {
  input: DeletePublicDataInput,
  condition?: ModelPublicDataConditionInput | null,
};

export type DeletePublicDataMutation = {
  deletePublicData?:  {
    __typename: "PublicData",
    id: string,
    title: string,
    description: string,
    image: string,
    tags?: Array< string | null > | null,
    cookTime?: number | null,
    servingSize?: number | null,
    ingredients?: Array< string | null > | null,
    prepSteps?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePushTokenMutationVariables = {
  input: CreatePushTokenInput,
  condition?: ModelPushTokenConditionInput | null,
};

export type CreatePushTokenMutation = {
  createPushToken?:  {
    __typename: "PushToken",
    id: string,
    token: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePushTokenMutationVariables = {
  input: UpdatePushTokenInput,
  condition?: ModelPushTokenConditionInput | null,
};

export type UpdatePushTokenMutation = {
  updatePushToken?:  {
    __typename: "PushToken",
    id: string,
    token: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePushTokenMutationVariables = {
  input: DeletePushTokenInput,
  condition?: ModelPushTokenConditionInput | null,
};

export type DeletePushTokenMutation = {
  deletePushToken?:  {
    __typename: "PushToken",
    id: string,
    token: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetPublicDataQueryVariables = {
  id: string,
};

export type GetPublicDataQuery = {
  getPublicData?:  {
    __typename: "PublicData",
    id: string,
    title: string,
    description: string,
    image: string,
    tags?: Array< string | null > | null,
    cookTime?: number | null,
    servingSize?: number | null,
    ingredients?: Array< string | null > | null,
    prepSteps?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPublicDataQueryVariables = {
  filter?: ModelPublicDataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPublicDataQuery = {
  listPublicData?:  {
    __typename: "ModelPublicDataConnection",
    items:  Array< {
      __typename: "PublicData",
      id: string,
      title: string,
      description: string,
      image: string,
      tags?: Array< string | null > | null,
      cookTime?: number | null,
      servingSize?: number | null,
      ingredients?: Array< string | null > | null,
      prepSteps?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPushTokenQueryVariables = {
  id: string,
};

export type GetPushTokenQuery = {
  getPushToken?:  {
    __typename: "PushToken",
    id: string,
    token: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPushTokensQueryVariables = {
  filter?: ModelPushTokenFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPushTokensQuery = {
  listPushTokens?:  {
    __typename: "ModelPushTokenConnection",
    items:  Array< {
      __typename: "PushToken",
      id: string,
      token: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreatePublicDataSubscriptionVariables = {
  filter?: ModelSubscriptionPublicDataFilterInput | null,
};

export type OnCreatePublicDataSubscription = {
  onCreatePublicData?:  {
    __typename: "PublicData",
    id: string,
    title: string,
    description: string,
    image: string,
    tags?: Array< string | null > | null,
    cookTime?: number | null,
    servingSize?: number | null,
    ingredients?: Array< string | null > | null,
    prepSteps?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePublicDataSubscriptionVariables = {
  filter?: ModelSubscriptionPublicDataFilterInput | null,
};

export type OnUpdatePublicDataSubscription = {
  onUpdatePublicData?:  {
    __typename: "PublicData",
    id: string,
    title: string,
    description: string,
    image: string,
    tags?: Array< string | null > | null,
    cookTime?: number | null,
    servingSize?: number | null,
    ingredients?: Array< string | null > | null,
    prepSteps?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePublicDataSubscriptionVariables = {
  filter?: ModelSubscriptionPublicDataFilterInput | null,
};

export type OnDeletePublicDataSubscription = {
  onDeletePublicData?:  {
    __typename: "PublicData",
    id: string,
    title: string,
    description: string,
    image: string,
    tags?: Array< string | null > | null,
    cookTime?: number | null,
    servingSize?: number | null,
    ingredients?: Array< string | null > | null,
    prepSteps?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePushTokenSubscriptionVariables = {
  filter?: ModelSubscriptionPushTokenFilterInput | null,
};

export type OnCreatePushTokenSubscription = {
  onCreatePushToken?:  {
    __typename: "PushToken",
    id: string,
    token: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePushTokenSubscriptionVariables = {
  filter?: ModelSubscriptionPushTokenFilterInput | null,
};

export type OnUpdatePushTokenSubscription = {
  onUpdatePushToken?:  {
    __typename: "PushToken",
    id: string,
    token: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePushTokenSubscriptionVariables = {
  filter?: ModelSubscriptionPushTokenFilterInput | null,
};

export type OnDeletePushTokenSubscription = {
  onDeletePushToken?:  {
    __typename: "PushToken",
    id: string,
    token: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
