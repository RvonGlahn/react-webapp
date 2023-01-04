import pandas as pd
import os
from typing import List

column_mapping = {
    'id': 'sofifa_id',
    'name': 'short_name',
    'club': 'club_name',
    'value': 'value_eur',
    'wage': 'wage_eur',
    'height': 'height_cm',
    'weight':'weight_kg',
    'release_clause': 'release_clause_eur',
}
FILE_PATH = os.path.dirname(os.path.abspath(__file__))

def read_from_csv(file: str) -> pd.DataFrame:
    csv_path = os.path.join(FILE_PATH, file)
    df = pd.read_csv(csv_path)
    return df

    
def compare_column_names(cols_new, cols_old):
    diff_cols = [col for col in cols_old if col not in cols_new]
    return diff_cols

def adapt_columns(df:pd.DataFrame):
    column_renaming = {col: col.lower().replace(' ', '_') for col in df.columns}
    df = df.rename(columns=column_renaming)
    df = df.rename(columns=column_mapping)
    return df

def add_empty_columns(df:pd.DataFrame, new_cols: List[str]):
    for col in new_cols:
        df[col] = ""

    return df

def check_equal_columns(cols_old, cols_new):
    equal_list = []
    for col_o, col_n in zip(cols_old, cols_new):
        if col_o != col_n:
            print(f'{col_o} != {col_n}')
            equal_list.append(f'{col_o} != {col_n}')

    return equal_list

def write_csv(df: pd.DataFrame, file:str):
    csv_path = os.path.join(FILE_PATH, file)
    df.to_csv(csv_path, index=False)

if __name__ == '__main__':
    file_23 = 'players_23.csv'
    data_23 = read_from_csv(file_23)

    file_21 = 'players_21.csv'
    data_21 = read_from_csv(file_21)

    new_columns = list(data_23.columns)
    old_columns = list(data_21.columns)
    diff = compare_column_names(new_columns, old_columns)
    print(diff)

    new_data_23 = adapt_columns(data_23)

    new_columns = list(new_data_23.columns)
    old_columns = list(data_21.columns)
    diff = compare_column_names(new_columns, old_columns)
    print(diff)


    add_empty_columns(new_data_23, diff)
    new_data_23 = new_data_23[old_columns]
    
    new_columns = list(new_data_23.columns)
    diff = check_equal_columns(new_columns, old_columns)
    
    if not diff:
        print('All Equal Yippie!')
        write_csv(new_data_23, 'new_23.csv')

