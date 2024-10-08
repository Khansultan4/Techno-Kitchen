import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";
import { initConfiguratorBuild, initSelectedItems } from "../../types/initStates";
import { IConfiguratorBuild, IItem, ISelectedItems } from "../../types/types";
import { fetchAddBuild } from "../thunkActions";

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
        changeSelectedItems(state:Draft<configuratorBuildState>, action: PayloadAction<IItem>) {
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
        },
        changeSeveralSelectedImes (state:Draft<configuratorBuildState>, action: PayloadAction<IItem[]>) {
          switch (action.payload[0].TypeId) {
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
          }
        }
    },
    extraReducers: (builder) => {
      builder.addCase(fetchAddBuild.fulfilled, (state, action) => {
        console.log('reducer', action.payload)
      })
      builder.addCase(fetchAddBuild.rejected, (state, action) => {
        console.log('reducer rej', action.payload)
      })
    },
  })

export default configuratorBuildSlace.reducer
export const {changeTitle, changeDescription, changeSelectedItems, changeSeveralSelectedImes} = configuratorBuildSlace.actions