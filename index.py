import random

rules = ["가위", "바위", "보"]

def GamBamBo(me, you):
    if me == rules[0] and you == rules[1]:
        return "당신이 졌습니다."
    elif me == rules[0] and you == rules[2]:
        return "당신이 이겼습니다"
    elif me == rules[0] and you == rules[0]:
        return "비겼습니다."
    elif me == rules[1] and you == rules[0]:
        return "당신이 졌습니다."
    elif me == rules[1] and you == rules[1]:
        return "비겼습니다."
    elif me == rules[1] and you == rules[2]:
        return "당신이 이겼습니다"
    elif me == rules[2] and you == rules[0]:
        return "당신이 이겼습니다."
    elif me == rules[2] and you == rules[1]:
        return "당신이 졌습니다."
    elif me == rules[2] and you == rules[2]:
        return "비겼습니다."


print(GamBamBo("보", "가위"))

def randomNumber(min, max):
    return int(random.random() * (max - min) + min)

print(randomNumber(0, 3))

print(GamBamBo(rules[randomNumber(0, 3)], rules[randomNumber(0, 3)]))
