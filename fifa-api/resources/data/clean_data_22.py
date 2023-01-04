import pandas as pd
import os

column_mapping = {
    'nationality_name': 'nationality',
    'league_level': 'league_rank',
    'club_position': 'team_position',
    'club_jersey_number': 'team_jersey_number',
    'club_loaned_from': 'loaned_from',
    'club_joined': 'joined',
    'club_contract_valid_until': 'contract_valid_until',
    'defending_marking_awareness': 'defending_marking',
}

add_columns = {
    'goalkeeping_diving': 'gk_diving',
    'goalkeeping_handling': 'gk_handling',
    'goalkeeping_kicking': 'gk_kicking',
    'goalkeeping_reflexes': 'gk_reflexes',
    'goalkeeping_speed': 'gk_speed',
    'goalkeeping_positioning': 'gk_positioning',
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
    df = df.rename(columns=column_mapping)

    for new_gk, old_gk in add_columns.items():
        df[old_gk] = df[new_gk]

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
    file_22 = 'players_22.csv'
    data_22 = read_from_csv(file_22)

    file_21 = 'players_21.csv'
    data_21 = read_from_csv(file_21)

    new_columns = list(data_22.columns)
    old_columns = list(data_21.columns)
    diff = compare_column_names(new_columns, old_columns)
    print(diff)

    new_data_22 = adapt_columns(data_22)
    new_data_22 = new_data_22[old_columns]
    
    new_columns = list(new_data_22.columns)
    diff = check_equal_columns(new_columns, old_columns)
    
    if not diff:
        print('All Equal Yippie!')
        write_csv(new_data_22, 'new_22.csv')

