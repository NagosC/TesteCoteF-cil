def descobre_palindromo(text):

    texto_formatado =  text.lower().replace(" ","")

    if texto_formatado == text[::-1]:
        print(f"A palavra {text} é um palíndromo!")

    else: 
        print(f"A palavra {text} não é um palíndromo!")



print("Digite '/' caso queira encerrar o programa! ")

while True:

    texto = input("Digite uma palavra para descobrir se é um palíndromo: ")

    if texto == "/":
        print("Encerrando Programa...")
        break


    descobre_palindromo(texto) 



