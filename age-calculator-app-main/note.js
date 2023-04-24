// 获取用户输入的出生日期
const birthDateStr = prompt('请输入您的出生日期，格式为 yyyy-mm-dd', '1990-01-01');

// 将出生日期字符串转换为日期对象
const birthDate = new Date(birthDateStr);

// 计算当前日期和出生日期之间的毫秒数差
const ageInMs = Date.now() - birthDate.getTime();

// 将毫秒数转换为年龄
const years = ageInMs / (1000 * 60 * 60 * 24 * 365);

// 计算出生年份的 2 月份天数（28 或 29 天）
const birthYear = birthDate.getFullYear();
const febDays = new Date(birthYear, 1, 29).getDate() === 29 ? 29 : 28;

// 计算闰年个数
let leapYears = 0;
for (let i = birthYear; i < new Date().getFullYear(); i++) {
  if (i % 4 === 0 && (i % 100 !== 0 || i % 400 === 0)) {
    leapYears++;
  }
}

// 计算实际年龄
const ageInYears = Math.floor(years) + leapYears - (birthDate.getMonth() > 1 || (birthDate.getMonth() === 1 && birthDate.getDate() >= febDays) ? 0 : 1);

// 显示计算出的年龄
alert(`您的年龄是 ${ageInYears} 岁。`);


 //出生的那年是闰年吗？
 const birthYear = birthDate.getFullYear();
 const febDays = new Date(birthYear, 1, 29).getDate() === 29 ? 29 : 28;
 //1-12月用0-11表示，这里计算了2月有几天
 // 计算闰年个数
let leapYears = 0;
//按照公历规定，闰年是指能够被4整除的年份为普通闰年，但是对于100的倍数年份，只有能够被400整除的才是闰年。例如，2000年是闰年，因为它既是4的倍数又是400的倍数；而1900年不是闰年，因为它是100的倍数但不是400的倍数。
for (let i = birthYear; i < new Date().getFullYear(); i++) {
if (i % 4 === 0 && (i % 100 !== 0 || i % 400 === 0)) {
 leapYears++;
}
}
// 计算实际年龄
const ageInYears = Math.floor(years) + leapYears - (birthDate.getMonth() > 1 || (birthDate.getMonth() === 1 && birthDate.getDate() >= febDays) ? 0 : 1);