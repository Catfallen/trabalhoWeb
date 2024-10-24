import psycopg2
from datetime import datetime


#print("[1] - Inserir")
#print("[2] - Vizualizar")
#op = input("Digite aqui")


#if op == "1":
try:
    connection = psycopg2.connect(
        host="localhost",        # ou o endereço do seu servidor PostgreSQL
        database="web", # nome do seu banco de dados
        user="postgres",       # seu nome de usuário no PostgreSQL
        password="markim"      # sua senha de acesso ao PostgreSQL
    )
    data = datetime.now()
    ano = data.year
    mes = data.month
    day = data.day

    for x in range(800,1850,50):
        string = str(x)
        print(f"{string[:2]} {string[-2:]}")
        #print(f"{x.}")
    dataString = f"{ano}-{mes}-{day}"
    print(dataString)
    # Criar um cursor para executar as consultas
    cursor = connection.cursor()
    
    # Exemplo: Executando uma consulta SQL
    #cursor.execute("insert into horarios (dia,horas);")
    
    # Obter os resultados
    #db_version = cursor.fetchone()
    #print(f"Versão do PostgreSQL: {db_version}")

except Exception as error:
    print(f"Erro ao conectar ao banco de dados: {error}")

finally:
    if connection:
        # Fechar o cursor e a conexão
        cursor.close()
        connection.close()
        print("Conexão com o PostgreSQL foi encerrada.")
    
# Conectar ao banco de dados
