def count_substring(string, substring):
    count = 0
    sub_len = len(substring)
    str_len = len(string)
    
    for i in range(str_len - sub_len + 1):
        if string[i:i+sub_len] == substring:
            count += 1
    
    return count

if __name__ == '__main__':
    string = input().strip()
    substring = input().strip()
    count = count_substring(string, substring)
    print(count)
