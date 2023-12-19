import { IUser } from "@/database/user.model";
import { Schema } from "mongoose";

export interface GetQuestionsParams {
  page?: number;
  pageSize?: number;
  searchQuery?: string;
  filter?: string;
}

export interface CreateQuestionParams {
  title: string;
  description: string;
  tags: string[];
  author: Schema.Types.ObjectId | IUser;
  path: string;
}

export interface EditQuestionParams {
  questionId: string;
  title: string;
  description: string;
  tags: string[];
  path: string;
}
