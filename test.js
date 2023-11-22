const version1 = '10.000.03';
const version2 = '10.000.02A';


function isNewVersion (vers1, vers2) {
    const split1 = vers1.split('.');
    const split2 = vers2.split('.');

    for (let i = 0; i < Math.max(split1.length, split2.length); i++) {
        const num1 = parseInt(split1[i]) || 0;
        const num2 = parseInt(split2[i]) || 0;

        if (num1 > num2) {
            return true;
        } 
        else if (num1 < num2) {
            return false
        }
    }
    return false;
}

if (isNewVersion(version1, version2)) {
    console.log(`${version2} is newest version`);
} else {
    console.log(`${version1} is newest version`);
}