// 여기서 문자열 형태로 코드를 받을 겁니다. 먼저 변수 둘을 준비합니다.
function tokenizer(input) {
        let current = 0;
        let tokens = [];
        while (current < input.length) {
            let char = input[current];

            if (char === '(') {
                tokens.push({
                    type:'paren',
                    value: '(',
                });

                current++;
                continue;
            }

            if  (char === ')') {
                tokens.push({
                    type: 'paren',
                    value: ')',
                });

                current++;
                continue;
            }

            let WHITESPACE = /\s/;
            if (WHITESPACE.test(char)) {
                
                current++;
                continue;
            }
        }