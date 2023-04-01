const isSubsequence = (s, t) => {
    if (s == "") {
        return true;
    }

    let flag = false;
    let lastIndex = -1;
    for (let i = 0; i < s.length; i++) {

        lastIndex = t.indexOf(s.charAt(i), (lastIndex + 1));
        if (lastIndex == -1) {
            flag = false;
            break; // once you didn't get letter break the loop
        } else {
            flag = true;
        }
    }

    return flag;
}

//test case run
console.log(isSubsequence("abc", "ahbgdc"))
console.log(isSubsequence("axc", "ahbgdc"))
console.log(isSubsequence("acb", "ahbgdc"))
console.log(isSubsequence("", "mnc"))
