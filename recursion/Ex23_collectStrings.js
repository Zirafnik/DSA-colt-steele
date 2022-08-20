// Ex. 23
// Recursion

// Time: O(n^2)
// Space: O(n)
function collectStrings(obj) {
    let strings = [];

    for(const value of Object.values(obj)) {
        if(typeof value !== 'string') {
            strings = strings.concat(collectStrings(value));
        } else {
            strings.push(value);
        }
    }

    return strings;
}

const obj = {
    stuff: "foo",
    empty: {
        burek: {
            sirov: {

            }
        }
    },
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])