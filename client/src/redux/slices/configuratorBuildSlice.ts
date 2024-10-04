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
            state.configuratorBuild.Items = action.payload;
        },
        changeSelectedItems(state:Draft<configuratorBuildState>, action: PayloadAction<IItem | IItem[]>) {
            switch (action.payload.TypeId) {
              case 1: {
                state.selectedItems.CPU = (action.payload as IItem);
                break;
              }
              case 2: {
                state.selectedItems.GPU = (action.payload as IItem)
                break;
              }
              case 3: {
                state.selectedItems.mother = (action.payload as IItem)
                break;
              }
              case 4: {
                state.selectedItems.RAM = (action.payload as IItem[])
                break;
              }
              case 5: {
                state.selectedItems.SSD = (action.payload as IItem[])
                break;
              }
              case 6: {
                state.selectedItems.cooling = (action.payload as IItem[])
                break;
              }
              case 7: {
                state.selectedItems.HHD = (action.payload as IItem[])
                break;
              }
              case 8: {
                state.selectedItems.power = (action.payload as IItem)
                break;
              }
              case 9: {
                state.selectedItems.case = (action.payload as IItem)
                break;
              }
              case 10: {
                state.selectedItems.termo = (action.payload as IItem)
                break;
              }
            }
        }
    },
    extraReducers: (builder) => {
    },
  })

export default configuratorBuildSlace.reducer
export const {changeTitle, changeDescription, changeItems, changeSelectedItems} = configuratorBuildSlace.actions