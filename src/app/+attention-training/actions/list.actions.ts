import { Action } from '@ngrx/store';
import { AttentionTraining } from '../models/attention-training';
import { GetAllParams } from 'app/+attention-training/services/db.service';

export enum AttentionTrainingTypes {
  ClearAttentionTrainings = '[AttentionTraining] Clear',
  LoadAttentionTrainings = '[AttentionTraining] Load',
  LoadAttentionTrainingsError = '[AttentionTraining] Load Error',
  LoadAttentionTrainingsComplete = '[AttentionTraining] Load Complete',
  AddAttentionTraining = '[AttentionTraining] Add',
  AddAttentionTrainingError = '[AttentionTraining] Add Error',
  AddAttentionTrainingComplete = '[AttentionTraining] Add Complete',
  DeleteAttentionTraining = '[AttentionTraining] Delete',
  DeleteAttentionTrainingError = '[AttentionTraining] Delete Error',
  DeleteAttentionTrainingComplete = '[AttentionTraining] Delete Complete',
  UpdateAttentionTraining = '[AttentionTraining] Update',
  UpdateAttentionTrainingError = '[AttentionTraining] Update Error',
  UpdateAttentionTrainingComplete = '[AttentionTraining] Update Complete',
}

export class LoadAttentionTrainings implements Action {
  readonly type = AttentionTrainingTypes.LoadAttentionTrainings;

  constructor(public payload: GetAllParams) {}
}

export class LoadAttentionTrainingsComplete implements Action {
  readonly type = AttentionTrainingTypes.LoadAttentionTrainingsComplete;

  constructor(public payload: AttentionTraining[]) {}
}

export class LoadAttentionTrainingsError implements Action {
  readonly type = AttentionTrainingTypes.LoadAttentionTrainingsError;

  constructor(public payload: any) {}
}

export class AddAttentionTraining implements Action {
  readonly type = AttentionTrainingTypes.AddAttentionTraining;

  constructor(public payload: Partial<AttentionTraining>) {}
}

export class AddAttentionTrainingError implements Action {
  readonly type = AttentionTrainingTypes.AddAttentionTrainingError;

  constructor(public payload: any) {}
}

export class AddAttentionTrainingComplete implements Action {
  readonly type = AttentionTrainingTypes.AddAttentionTrainingComplete;

  constructor(public payload: AttentionTraining) {}
}

export class DeleteAttentionTraining implements Action {
  readonly type = AttentionTrainingTypes.DeleteAttentionTraining;

  constructor(public payload: AttentionTraining) {}
}

export class DeleteAttentionTrainingError implements Action {
  readonly type = AttentionTrainingTypes.DeleteAttentionTrainingError;

  constructor(public payload: any) {}
}

export class DeleteAttentionTrainingComplete implements Action {
  readonly type = AttentionTrainingTypes.DeleteAttentionTrainingComplete;

  constructor(public payload: AttentionTraining) {}
}

export type AttentionTrainingActions =
  | LoadAttentionTrainings
  | LoadAttentionTrainingsError
  | LoadAttentionTrainingsComplete
  | AddAttentionTraining
  | AddAttentionTrainingError
  | AddAttentionTrainingComplete
  | DeleteAttentionTraining
  | DeleteAttentionTrainingError
  | DeleteAttentionTrainingComplete;
