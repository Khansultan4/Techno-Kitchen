import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";
import { initConfiguratorBuild, initItem, initSelectedItems } from "../../types/initStates";
import { IConfiguratorBuild, IItem, ISelectedItems } from "../../types/types";

export type configuratorBuildState = {
    configuratorBuild: IConfiguratorBuild;
    selectedItems: ISelectedItems
    loading: boolean;
    error: unknown;
  };

  const initialState:configuratorBuildState = {
    configuratorBuild: initConfiguratorBuild,
    selectedItems: initSelectedItems,
    loading: true,
    error: { message: '' },
  };

  const configuratorBuildSlace = createSlice({
    name: 'configuratorBuild',
    initialState,
    reducers: {
        changeTitle(state:Draft<configuratorBuildState>, action: PayloadAction<string>):void {
            state.configuratorBuild.title = action.payload
        },
        changeDescription(state:Draft<configuratorBuildState>, action: PayloadAction<string>):void {
            state.configuratorBuild.description = action.payload
        },
        changeItems(state:Draft<configuratorBuildState>, action: PayloadAction<IItem[]>):void {
            state.configuratorBuild.Items = action.payload
        },        
    },
    extraReducers: (builder) => {},
  })

export default configuratorBuildSlace.reducer
export const {changeTitle, changeDescription, changeItems} = configuratorBuildSlace.actions