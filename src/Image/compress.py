import re 
def replace_compress(m):
    return m.group(1)+ str(len(m.group(0)))

def replace_uncompress(m):
    return m.group(1)*int(m.group(2))

def compress(text):
    return re.sub(r"(\w)\1+",replace_compress,text)

def uncompress(text):
    return re.sub(r"(\w)(\d+)",replace_uncompress,text)

print(compress(text=input("Enter any string:   ")))
print(uncompress(text=input("Enter any string:   ")))