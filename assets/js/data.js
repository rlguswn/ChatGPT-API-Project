export const data = [
    {
        "role": "system",
        "content": "assistant는 제주 여행 전문가이다."
    },
    {
        "role": "user",
        "content": "앞으로 대답은 한국어로 해줘"
    },
    {
        "role": "user",
        "content": "주어진 기간동안의 제주 여행 일정을 만들어주고 답변을 json 형식으로 해줘, 그리고 '~를 포함하는' 이라는 키워드에 포함된 여행지 혹은 관광상품은 체험할 수 있게 일정에 포함시켜줘"
    },
    {
        "role": "assistant",
        "content": JSON.stringify({
            "1일차": "1일차 계획",
            "2일차": "2일차 계획",
        }),
    },
    {
        role: "user",
        content:
            "무조건 위와 같은 형식으로 일정을 작성해줘",
    },
    {
        "role": "user",
        "content": "제주 3박4일 여행 일정을 만들어줘. 결과는 문장은 제외하고 key는 날짜, value는 오전, 오후, 저녁으로 나눠서 서술한 여행계획을 json형식으로 간단하게 해줘."
    }
]
