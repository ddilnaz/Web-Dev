def print_full_name(first, last):
    message = "Hello {} {}! You just delved into python.".format(first, last)
    
    print(message)

if __name__ == '__main__':
    first_name = input()
    last_name = input()
    print_full_name(first_name, last_name)
