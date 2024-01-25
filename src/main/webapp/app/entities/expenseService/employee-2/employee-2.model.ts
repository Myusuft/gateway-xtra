import { IUserExpense } from 'app/entities/expenseService/user-expense/user-expense.model';
import { IExpenseActivity } from 'app/entities/expenseService/expense-activity/expense-activity.model';

export interface IEmployee2 {
  id: string;
  name?: string | null;
  userExpenses?: Pick<IUserExpense, 'id'>[] | null;
  expenseActivities?: Pick<IExpenseActivity, 'id'>[] | null;
}

export type NewEmployee2 = Omit<IEmployee2, 'id'> & { id: null };
