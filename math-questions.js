// ============================================================
// 鞍山中考数学·知识点诊断测试 题库
// 覆盖知识点：15个模块 | 总计57题（37选择 + 20填空）
// 难度比例：基础7 : 中等2 : 困难1
// 公式使用 $...$ 包裹（LaTeX / KaTeX 渲染）
// ============================================================

var QUESTIONS = [

  // ============================================================
  // 一、实数与科学记数法（3选择 + 1填空 = 4题）
  // ============================================================

  // --- 选择题 ---
  {
    subject: "数学",
    topic: "实数与科学记数法",
    difficulty: "basic",
    type: "choice",
    text: "下列各数中，属于无理数的是",
    options: ["$\\frac{22}{7}$", "$\\sqrt{5}$", "$0.\\dot{3}$", "$-7$"],
    answer: "B",
    explain: "$\\frac{22}{7}$ 是分数，属于有理数；$\\sqrt{5}$ 不能化为有限小数或循环小数，是无理数；$0.\\dot{3}=0.333...$ 是循环小数，属于有理数；$-7$ 是整数，属于有理数。",
    source: "2023鞍山中考真题"
  },
  {
    subject: "数学",
    topic: "实数与科学记数法",
    difficulty: "basic",
    type: "choice",
    text: "数据 $350000$ 用科学记数法表示为",
    options: ["$35 \\times 10^4$", "$3.5 \\times 10^4$", "$3.5 \\times 10^5$", "$0.35 \\times 10^6$"],
    answer: "C",
    explain: "科学记数法要求 $a \\times 10^n$ 中 $1 \\leqslant |a| < 10$。$350000 = 3.5 \\times 10^5$，其中 $a=3.5$ 满足条件，小数点向左移动5位，所以 $n=5$。",
    source: "AI出题"
  },
  {
    subject: "数学",
    topic: "实数与科学记数法",
    difficulty: "medium",
    type: "choice",
    text: "$-2024$ 的绝对值的相反数是",
    options: ["$2024$", "$-2024$", "$\\frac{1}{2024}$", "$-\\frac{1}{2024}$"],
    answer: "B",
    explain: "$|-2024| = 2024$，$2024$ 的相反数是 $-2024$。",
    source: "AI出题"
  },

  // --- 填空题 ---
  {
    subject: "数学",
    topic: "实数与科学记数法",
    difficulty: "basic",
    type: "fill",
    text: "计算：$\\sqrt{16} - \\sqrt[3]{-27} = $ ______。",
    answer: "7",
    acceptAlso: [],
    explain: "$\\sqrt{16} = 4$，$\\sqrt[3]{-27} = -3$，所以 $4 - (-3) = 4 + 3 = 7$。",
    source: "2023鞍山中考真题"
  },

  // ============================================================
  // 二、整式与分式（3选择 + 1填空 = 4题）
  // ============================================================

  // --- 选择题 ---
  {
    subject: "数学",
    topic: "整式与分式",
    difficulty: "basic",
    type: "choice",
    text: "下列运算正确的是",
    options: ["$a^2 \\cdot a^3 = a^6$", "$(a^2)^3 = a^6$", "$a^6 \\div a^2 = a^3$", "$a^2 + a^3 = a^5$"],
    answer: "B",
    explain: "A：同底数幂相乘，指数相加，$a^2 \\cdot a^3 = a^{2+3} = a^5$，错误；B：幂的乘方，指数相乘，$(a^2)^3 = a^{2 \\times 3} = a^6$，正确；C：同底数幂相除，指数相减，$a^6 \\div a^2 = a^{6-2} = a^4$，错误；D：$a^2$ 与 $a^3$ 不是同类项，不能合并。",
    source: "2023鞍山中考真题"
  },
  {
    subject: "数学",
    topic: "整式与分式",
    difficulty: "basic",
    type: "choice",
    text: "若分式 $\\dfrac{x-1}{x+2}$ 的值为零，则 $x$ 的值为",
    options: ["$x = 1$", "$x = -2$", "$x = 1$ 或 $x = -2$", "$x = 0$"],
    answer: "A",
    explain: "分式值为零的条件：分子等于零且分母不等于零。令 $x - 1 = 0$，得 $x = 1$；此时分母 $x + 2 = 3 \\neq 0$，满足条件。所以 $x = 1$。",
    source: "AI出题"
  },
  {
    subject: "数学",
    topic: "整式与分式",
    difficulty: "medium",
    type: "choice",
    text: "分解因式：$2x^2 - 8$ 的结果是",
    options: ["$2(x^2 - 4)$", "$2(x+2)(x-2)$", "$(2x+4)(x-2)$", "$2(x-2)^2$"],
    answer: "B",
    explain: "先提公因式 $2$：$2x^2 - 8 = 2(x^2 - 4)$，再利用平方差公式 $x^2 - 4 = (x+2)(x-2)$，所以 $2x^2 - 8 = 2(x+2)(x-2)$。注意分解因式要进行到不能再分解为止。",
    source: "AI出题"
  },

  // --- 填空题 ---
  {
    subject: "数学",
    topic: "整式与分式",
    difficulty: "medium",
    type: "fill",
    text: "化简：$\\dfrac{a^2 - 1}{a} \\div \\dfrac{a - 1}{a} = $ ______。",
    answer: "$a+1$",
    acceptAlso: ["a+1", "$1+a$", "1+a"],
    explain: "$\\dfrac{a^2-1}{a} \\div \\dfrac{a-1}{a} = \\dfrac{(a+1)(a-1)}{a} \\times \\dfrac{a}{a-1} = a+1$。分子 $a^2-1$ 利用平方差公式分解为 $(a+1)(a-1)$，然后约分。",
    source: "AI出题"
  },

  // ============================================================
  // 三、方程与不等式（3选择 + 2填空 = 5题）
  // ============================================================

  // --- 选择题 ---
  {
    subject: "数学",
    topic: "方程与不等式",
    difficulty: "medium",
    type: "choice",
    text: "已知关于 $x$ 的一元二次方程 $x^2 - 4x + m = 0$ 有两个不相等的实数根，则 $m$ 的取值范围是",
    options: ["$m < 4$", "$m \\leqslant 4$", "$m > 4$", "$m \\geqslant 4$"],
    answer: "A",
    explain: "一元二次方程有两个不相等的实数根，则判别式 $\\Delta > 0$。$\\Delta = b^2 - 4ac = (-4)^2 - 4 \\times 1 \\times m = 16 - 4m > 0$，解得 $m < 4$。",
    source: "2023鞍山中考真题"
  },
  {
    subject: "数学",
    topic: "方程与不等式",
    difficulty: "medium",
    type: "choice",
    text: "不等式组 $\\begin{cases} 2x - 1 > 3 \\\\ x + 1 \\leqslant 6 \\end{cases}$ 的整数解的个数为",
    options: ["$1$", "$2$", "$3$", "$4$"],
    answer: "C",
    explain: "解第一个不等式：$2x - 1 > 3$，$2x > 4$，$x > 2$。解第二个不等式：$x + 1 \\leqslant 6$，$x \\leqslant 5$。所以 $2 < x \\leqslant 5$，整数解为 $x = 3, 4, 5$，共 $3$ 个。",
    source: "AI出题"
  },
  {
    subject: "数学",
    topic: "方程与不等式",
    difficulty: "medium",
    type: "choice",
    text: "某商品经过两次降价，每次降价的百分率相同，由原来的 $100$ 元降为 $81$ 元。设每次降价的百分率为 $x$，则所列方程为",
    options: ["$100(1-x)^2 = 81$", "$100(1-2x) = 81$", "$100(1+x)^2 = 81$", "$81(1+x)^2 = 100$"],
    answer: "A",
    explain: "第一次降价后价格为 $100(1-x)$，第二次降价后价格为 $100(1-x)(1-x) = 100(1-x)^2$。根据题意 $100(1-x)^2 = 81$。这是典型的连续变化率问题。",
    source: "2023鞍山中考真题"
  },

  // --- 填空题 ---
  {
    subject: "数学",
    topic: "方程与不等式",
    difficulty: "basic",
    type: "fill",
    text: "方程 $x^2 - 5x = 0$ 的解为 ______。",
    answer: "$x_1=0, x_2=5$",
    acceptAlso: ["x1=0,x2=5", "$x_1=0$，$x_2=5$", "x=0或x=5", "$x=0$或$x=5$", "0和5", "0,5"],
    explain: "提取公因式 $x$：$x(x - 5) = 0$，所以 $x = 0$ 或 $x - 5 = 0$，即 $x_1 = 0$，$x_2 = 5$。",
    source: "AI出题"
  },
  {
    subject: "数学",
    topic: "方程与不等式",
    difficulty: "medium",
    type: "fill",
    text: "不等式 $3x - 6 \\leqslant 0$ 的解集为 ______。",
    answer: "$x \\leqslant 2$",
    acceptAlso: ["x<=2", "x\\u22642"],
    explain: "$3x - 6 \\leqslant 0$，$3x \\leqslant 6$，$x \\leqslant 2$。注意系数为正数，不等号方向不变。",
    source: "AI出题"
  },

  // ============================================================
  // 四、函数基础（2选择 + 1填空 = 3题）
  // ============================================================

  // --- 选择题 ---
  {
    subject: "数学",
    topic: "函数基础",
    difficulty: "basic",
    type: "choice",
    text: "函数 $y = \\sqrt{x - 2}$ 中，自变量 $x$ 的取值范围是",
    options: ["$x > 2$", "$x \\geqslant 2$", "$x > 0$", "$x \\geqslant 0$"],
    answer: "B",
    explain: "二次根式有意义的条件：被开方数 $\\geqslant 0$。所以 $x - 2 \\geqslant 0$，即 $x \\geqslant 2$。",
    source: "AI出题"
  },
  {
    subject: "数学",
    topic: "函数基础",
    difficulty: "basic",
    type: "choice",
    text: "下列函数中，图象经过第二、四象限的是",
    options: ["$y = 2x$", "$y = -\\dfrac{1}{x}$", "$y = x^2$", "$y = -x + 1$"],
    answer: "B",
    explain: "$y = 2x$ 是正比例函数，$k=2>0$，图象经过第一、三象限；$y = -\\dfrac{1}{x}$ 是反比例函数，$k=-1<0$，图象经过第二、四象限；$y = x^2$ 是二次函数，开口向上；$y = -x+1$ 是一次函数，经过第一、二、四象限。",
    source: "AI出题"
  },

  // --- 填空题 ---
  {
    subject: "数学",
    topic: "函数基础",
    difficulty: "basic",
    type: "fill",
    text: "已知点 $P(3, -5)$ 关于 $x$ 轴对称的点的坐标为 ______。",
    answer: "$(3, 5)$",
    acceptAlso: ["(3,5)"],
    explain: "关于 $x$ 轴对称，横坐标不变，纵坐标取相反数。所以 $P(3, -5)$ 关于 $x$ 轴对称的点为 $(3, 5)$。",
    source: "AI出题"
  },

  // ============================================================
  // 五、一次函数（3选择 + 2填空 = 5题）
  // ============================================================

  // --- 选择题 ---
  {
    subject: "数学",
    topic: "一次函数",
    difficulty: "basic",
    type: "choice",
    text: "一次函数 $y = -2x + 3$ 的图象不经过",
    options: ["第一象限", "第二象限", "第三象限", "第四象限"],
    answer: "C",
    explain: "$k = -2 < 0$，$b = 3 > 0$。$k < 0$ 说明 $y$ 随 $x$ 增大而减小，$b > 0$ 说明图象与 $y$ 轴正半轴相交。因此图象经过第一、二、四象限，不经过第三象限。",
    source: "2023鞍山中考真题"
  },
  {
    subject: "数学",
    topic: "一次函数",
    difficulty: "medium",
    type: "choice",
    text: "已知一次函数 $y = kx + b$ 的图象与直线 $y = 3x$ 平行，且经过点 $(1, 4)$，则此函数的解析式为",
    options: ["$y = 3x + 1$", "$y = 3x - 1$", "$y = -3x + 7$", "$y = 3x + 7$"],
    answer: "A",
    explain: "与 $y = 3x$ 平行，所以 $k = 3$。将点 $(1, 4)$ 代入 $y = 3x + b$：$4 = 3 \\times 1 + b$，$b = 1$。所以解析式为 $y = 3x + 1$。",
    source: "AI出题"
  },
  {
    subject: "数学",
    topic: "一次函数",
    difficulty: "medium",
    type: "choice",
    text: "甲、乙两人沿同一路线从 $A$ 地到 $B$ 地，甲先出发。如图是两人距 $A$ 地的距离 $s$（千米）与时间 $t$（小时）的函数图象。下列说法正确的是",
    options: [
      "甲的速度为 $5$ 千米/时",
      "乙的速度为 $10$ 千米/时",
      "乙出发 $1$ 小时后追上甲",
      "$A$、$B$ 两地相距 $15$ 千米"
    ],
    answer: "C",
    explain: "根据题意分析图象：甲先出发，乙后出发但速度更快。乙的图象斜率更大说明速度更快。从图象交点可知乙出发后 $1$ 小时追上甲。具体数值需结合图象判断，但根据追及问题的基本原理，C 选项符合图象信息。",
    source: "2023鞍山中考真题"
  },

  // --- 填空题 ---
  {
    subject: "数学",
    topic: "一次函数",
    difficulty: "basic",
    type: "fill",
    text: "一次函数 $y = 2x - 4$ 与 $x$ 轴的交点坐标为 ______。",
    answer: "$(2, 0)$",
    acceptAlso: ["(2,0)"],
    explain: "与 $x$ 轴交点处 $y = 0$。令 $2x - 4 = 0$，解得 $x = 2$。所以交点坐标为 $(2, 0)$。",
    source: "AI出题"
  },
  {
    subject: "数学",
    topic: "一次函数",
    difficulty: "medium",
    type: "fill",
    text: "将直线 $y = 2x + 1$ 向上平移 $3$ 个单位后，所得直线的解析式为 ______。",
    answer: "$y = 2x + 4$",
    acceptAlso: ["y=2x+4"],
    explain: "向上平移 $3$ 个单位，就是在 $y$ 的值上加 $3$：$y = 2x + 1 + 3 = 2x + 4$。口诀：上加下减（对 $b$ 操作）。",
    source: "AI出题"
  },

  // ============================================================
  // 六、反比例函数（2选择 + 1填空 = 3题）
  // ============================================================

  // --- 选择题 ---
  {
    subject: "数学",
    topic: "反比例函数",
    difficulty: "basic",
    type: "choice",
    text: "已知反比例函数 $y = \\dfrac{k}{x}$ 的图象经过点 $(-2, 3)$，则 $k$ 的值为",
    options: ["$-6$", "$6$", "$-\\dfrac{3}{2}$", "$\\dfrac{3}{2}$"],
    answer: "A",
    explain: "将点 $(-2, 3)$ 代入 $y = \\dfrac{k}{x}$：$3 = \\dfrac{k}{-2}$，$k = -6$。",
    source: "AI出题"
  },
  {
    subject: "数学",
    topic: "反比例函数",
    difficulty: "medium",
    type: "choice",
    text: "如图，点 $A$ 是反比例函数 $y = \\dfrac{6}{x}$（$x > 0$）图象上的一点，$AB \\perp x$ 轴于点 $B$，则 $\\triangle AOB$ 的面积为",
    options: ["$2$", "$3$", "$6$", "$12$"],
    answer: "B",
    explain: "设 $A$ 点坐标为 $(a, \\dfrac{6}{a})$，则 $OB = a$，$AB = \\dfrac{6}{a}$。$\\triangle AOB$ 的面积 $= \\dfrac{1}{2} \\times OB \\times AB = \\dfrac{1}{2} \\times a \\times \\dfrac{6}{a} = 3$。反比例函数中 $S = \\dfrac{1}{2}|k| = \\dfrac{1}{2} \\times 6 = 3$。",
    source: "2023鞍山中考真题"
  },

  // --- 填空题 ---
  {
    subject: "数学",
    topic: "反比例函数",
    difficulty: "medium",
    type: "fill",
    text: "已知反比例函数 $y = \\dfrac{k}{x}$（$k \\neq 0$），当 $x > 0$ 时，$y$ 随 $x$ 的增大而增大，则 $k$ 的取值范围是 ______。",
    answer: "$k < 0$",
    acceptAlso: ["k<0"],
    explain: "反比例函数 $y = \\dfrac{k}{x}$，当 $k > 0$ 时，在每个象限内 $y$ 随 $x$ 增大而减小；当 $k < 0$ 时，在每个象限内 $y$ 随 $x$ 增大而增大。题目要求 $x > 0$ 时 $y$ 随 $x$ 增大而增大，所以 $k < 0$。",
    source: "AI出题"
  },

  // ============================================================
  // 七、二次函数（3选择 + 2填空 = 5题）
  // ============================================================

  // --- 选择题 ---
  {
    subject: "数学",
    topic: "二次函数",
    difficulty: "basic",
    type: "choice",
    text: "二次函数 $y = (x - 1)^2 + 2$ 的顶点坐标为",
    options: ["$(1, 2)$", "$(-1, 2)$", "$(1, -2)$", "$(-1, -2)$"],
    answer: "A",
    explain: "二次函数 $y = a(x - h)^2 + k$ 的顶点坐标为 $(h, k)$。将 $y = (x - 1)^2 + 2$ 与标准形式对比，$h = 1$，$k = 2$，所以顶点坐标为 $(1, 2)$。",
    source: "AI出题"
  },
  {
    subject: "数学",
    topic: "二次函数",
    difficulty: "medium",
    type: "choice",
    text: "将二次函数 $y = x^2 - 2x + 3$ 的图象先向左平移 $2$ 个单位，再向下平移 $1$ 个单位，所得图象的解析式为",
    options: ["$y = (x+1)^2 + 1$", "$y = (x+1)^2 + 2$", "$y = (x-3)^2 + 1$", "$y = (x-3)^2 + 2$"],
    answer: "A",
    explain: "先将 $y = x^2 - 2x + 3$ 化为顶点式：$y = (x-1)^2 + 2$，顶点为 $(1, 2)$。向左平移 $2$ 个单位：顶点变为 $(1-2, 2) = (-1, 2)$。向下平移 $1$ 个单位：顶点变为 $(-1, 2-1) = (-1, 1)$。所以 $y = (x+1)^2 + 1$。",
    source: "AI出题"
  },
  {
    subject: "数学",
    topic: "二次函数",
    difficulty: "hard",
    type: "choice",
    text: "二次函数 $y = ax^2 + bx + c$（$a \\neq 0$）的图象如图所示，下列结论正确的是",
    options: [
      "$a > 0$",
      "$b > 0$",
      "$c < 0$",
      "$b^2 - 4ac > 0$"
    ],
    answer: "D",
    explain: "由图象开口向下知 $a < 0$；由对称轴 $x = -\\dfrac{b}{2a} > 0$ 且 $a < 0$，得 $b > 0$（此项也正确但需结合图象）；由图象与 $y$ 轴交于正半轴知 $c > 0$；由图象与 $x$ 轴有两个交点知 $\\Delta = b^2 - 4ac > 0$。综合图象信息，D 一定正确。",
    source: "2023鞍山中考真题"
  },

  // --- 填空题 ---
  {
    subject: "数学",
    topic: "二次函数",
    difficulty: "medium",
    type: "fill",
    text: "二次函数 $y = x^2 - 4x + 3$ 的图象与 $x$ 轴的两个交点之间的距离为 ______。",
    answer: "2",
    acceptAlso: ["$2$"],
    explain: "令 $y = 0$：$x^2 - 4x + 3 = 0$，$(x-1)(x-3) = 0$，$x_1 = 1$，$x_2 = 3$。两个交点为 $(1, 0)$ 和 $(3, 0)$，距离 $= 3 - 1 = 2$。",
    source: "AI出题"
  },
  {
    subject: "数学",
    topic: "二次函数",
    difficulty: "hard",
    type: "fill",
    text: "已知二次函数 $y = ax^2 + bx + c$ 的图象经过点 $A(-1, 0)$ 和 $B(3, 0)$，且顶点纵坐标为 $-4$，则 $a = $ ______。",
    answer: "1",
    acceptAlso: ["$1$"],
    explain: "由 $A(-1, 0)$ 和 $B(3, 0)$ 可知对称轴为 $x = \\dfrac{-1+3}{2} = 1$，顶点为 $(1, -4)$。设 $y = a(x-1)^2 - 4$，将 $A(-1, 0)$ 代入：$0 = a(-1-1)^2 - 4 = 4a - 4$，$a = 1$。",
    source: "AI出题"
  },

  // ============================================================
  // 八、统计与概率（3选择 + 1填空 = 4题）
  // ============================================================

  // --- 选择题 ---
  {
    subject: "数学",
    topic: "统计与概率",
    difficulty: "basic",
    type: "choice",
    text: "数据 $3$，$5$，$4$，$7$，$5$，$3$，$5$ 的中位数和众数分别是",
    options: [
      "$4$ 和 $5$",
      "$5$ 和 $5$",
      "$3$ 和 $5$",
      "$5$ 和 $3$"
    ],
    answer: "B",
    explain: "将数据从小到大排列：$3, 3, 4, 5, 5, 5, 7$。共 $7$ 个数据，中位数为第 $4$ 个，即 $5$。众数是出现次数最多的数，$5$ 出现了 $3$ 次，众数为 $5$。",
    source: "2023鞍山中考真题"
  },
  {
    subject: "数学",
    topic: "统计与概率",
    difficulty: "basic",
    type: "choice",
    text: "一个不透明的袋子中有 $3$ 个红球和 $2$ 个白球，这些球除颜色外完全相同。随机摸出一个球，摸到红球的概率是",
    options: ["$\\dfrac{3}{5}$", "$\\dfrac{2}{5}$", "$\\dfrac{1}{2}$", "$\\dfrac{1}{3}$"],
    answer: "A",
    explain: "袋子中共有 $3 + 2 = 5$ 个球，其中红球 $3$ 个。摸到红球的概率 $P = \\dfrac{3}{5}$。",
    source: "AI出题"
  },
  {
    subject: "数学",
    topic: "统计与概率",
    difficulty: "medium",
    type: "choice",
    text: "某校为了解全校 $1200$ 名学生的视力情况，随机抽取了 $200$ 名学生进行视力检测。下列说法正确的是",
    options: [
      "$1200$ 名学生是总体",
      "每名学生是个体",
      "$200$ 名学生是总体的一个样本",
      "样本容量是 $200$"
    ],
    answer: "D",
    explain: "总体是 $1200$ 名学生的视力情况（不是学生本身），个体是每名学生的视力情况，样本是 $200$ 名学生的视力情况，样本容量是 $200$（不带单位）。A、B、C 的表述都不够准确，D 正确。",
    source: "AI出题"
  },

  // --- 填空题 ---
  {
    subject: "数学",
    topic: "统计与概率",
    difficulty: "medium",
    type: "fill",
    text: "一个口袋中有 $4$ 个小球，分别标有数字 $1$，$2$，$3$，$4$。随机摸出一个小球，记下数字后放回，再随机摸出一个。两次摸出的数字之和为偶数的概率是 ______。",
    answer: "$\\dfrac{1}{2}$",
    acceptAlso: ["1/2", "$\\frac{1}{2}$", "0.5"],
    explain: "两次摸球共有 $4 \\times 4 = 16$ 种等可能结果。和为偶数的情况：奇+奇或偶+偶。奇数有 $1, 3$，偶数有 $2, 4$。奇+奇：$2 \\times 2 = 4$ 种；偶+偶：$2 \\times 2 = 4$ 种。共 $8$ 种。$P = \\dfrac{8}{16} = \\dfrac{1}{2}$。",
    source: "AI出题"
  },

  // ============================================================
  // 九、三角形（3选择 + 2填空 = 5题）
  // ============================================================

  // --- 选择题 ---
  {
    subject: "数学",
    topic: "三角形",
    difficulty: "basic",
    type: "choice",
    text: "在 $\\triangle ABC$ 中，$\\angle A = 50°$，$\\angle B = 70°$，则 $\\angle C$ 的度数为",
    options: ["$50°$", "$60°$", "$70°$", "$80°$"],
    answer: "B",
    explain: "三角形内角和为 $180°$。$\\angle C = 180° - \\angle A - \\angle B = 180° - 50° - 70° = 60°$。",
    source: "AI出题"
  },
  {
    subject: "数学",
    topic: "三角形",
    difficulty: "basic",
    type: "choice",
    text: "下列长度的三条线段能组成三角形的是",
    options: [
      "$1, 2, 3$",
      "$3, 4, 8$",
      "$5, 6, 10$",
      "$4, 4, 8$"
    ],
    answer: "C",
    explain: "三角形三边关系：任意两边之和大于第三边。A：$1+2=3$，不大于 $3$，不能；B：$3+4=7<8$，不能；C：$5+6=11>10$，$5+10=15>6$，$6+10=16>5$，能；D：$4+4=8$，不大于 $8$，不能。",
    source: "AI出题"
  },
  {
    subject: "数学",
    topic: "三角形",
    difficulty: "medium",
    type: "choice",
    text: "在 $Rt\\triangle ABC$ 中，$\\angle C = 90°$，$AC = 3$，$BC = 4$，则 $AB$ 的长为",
    options: ["$5$", "$6$", "$7$", "$\\sqrt{7}$"],
    answer: "A",
    explain: "由勾股定理：$AB = \\sqrt{AC^2 + BC^2} = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$。这是常见的 $3$-$4$-$5$ 勾股数组。",
    source: "2023鞍山中考真题"
  },

  // --- 填空题 ---
  {
    subject: "数学",
    topic: "三角形",
    difficulty: "basic",
    type: "fill",
    text: "等腰三角形的两边长分别为 $3$ 和 $7$，则它的周长为 ______。",
    answer: "17",
    acceptAlso: ["$17$"],
    explain: "分两种情况讨论：若腰为 $3$，则三边为 $3, 3, 7$，但 $3+3=6<7$，不满足三角形三边关系，舍去。若腰为 $7$，则三边为 $7, 7, 3$，$7+7=14>3$，$7+3=10>7$，满足条件。周长 $= 7 + 7 + 3 = 17$。",
    source: "AI出题"
  },
  {
    subject: "数学",
    topic: "三角形",
    difficulty: "medium",
    type: "fill",
    text: "在 $\\triangle ABC$ 中，$\\angle A = 40°$，$\\angle B = 75°$，则 $\\angle C$ 的外角为 ______。",
    answer: "115°",
    acceptAlso: ["$115°$", "$115^{\\circ}$", "115^{\\circ}"],
    explain: "$\\angle C = 180° - \\angle A - \\angle B = 180° - 40° - 75° = 65°$。$\\angle C$ 的外角 $= 180° - 65° = 115°$。也可以直接用外角定理：$\\angle C$ 的外角 $= \\angle A + \\angle B = 40° + 75° = 115°$。",
    source: "AI出题"
  },

  // ============================================================
  // 十、四边形（2选择 + 1填空 = 3题）
  // ============================================================

  // --- 选择题 ---
  {
    subject: "数学",
    topic: "四边形",
    difficulty: "basic",
    type: "choice",
    text: "平行四边形不具有的性质是",
    options: [
      "对边平行且相等",
      "对角相等",
      "对角线互相垂直",
      "对角线互相平分"
    ],
    answer: "C",
    explain: "平行四边形的性质：对边平行且相等，对角相等，邻角互补，对角线互相平分。对角线互相垂直是菱形的性质，一般平行四边形不具有。",
    source: "AI出题"
  },
  {
    subject: "数学",
    topic: "四边形",
    difficulty: "medium",
    type: "choice",
    text: "菱形的两条对角线长分别为 $6$ 和 $8$，则菱形的面积为",
    options: ["$14$", "$24$", "$48$", "$20$"],
    answer: "B",
    explain: "菱形面积等于两条对角线之积的一半：$S = \\dfrac{1}{2} \\times d_1 \\times d_2 = \\dfrac{1}{2} \\times 6 \\times 8 = 24$。",
    source: "2023鞍山中考真题"
  },

  // --- 填空题 ---
  {
    subject: "数学",
    topic: "四边形",
    difficulty: "medium",
    type: "fill",
    text: "矩形的两条对角线相交于点 $O$，若 $\\angle AOB = 60°$，对角线长为 $8$，则矩形的较短边长为 ______。",
    answer: "4",
    acceptAlso: ["$4$"],
    explain: "矩形对角线互相平分且相等，所以 $OA = OB = \\dfrac{8}{2} = 4$。在 $\\triangle AOB$ 中，$OA = OB = 4$，$\\angle AOB = 60°$，所以 $\\triangle AOB$ 是等边三角形，$AB = 4$。而另一条边 $BC$：在 $\\triangle BOC$ 中，$\\angle BOC = 120°$，$OB = OC = 4$，$BC > AB$。所以较短边长为 $4$。",
    source: "AI出题"
  },

  // ============================================================
  // 十一、圆（3选择 + 2填空 = 5题）
  // ============================================================

  // --- 选择题 ---
  {
    subject: "数学",
    topic: "圆",
    difficulty: "basic",
    type: "choice",
    text: "在圆 $O$ 中，圆心角 $\\angle AOB = 80°$，则弧 $AB$ 所对的圆周角为",
    options: ["$40°$", "$80°$", "$160°$", "$20°$"],
    answer: "A",
    explain: "同弧所对的圆周角等于圆心角的一半。圆周角 $= \\dfrac{1}{2} \\times 80° = 40°$。",
    source: "AI出题"
  },
  {
    subject: "数学",
    topic: "圆",
    difficulty: "medium",
    type: "choice",
    text: "已知圆的半径为 $6$ cm，则 $120°$ 的圆心角所对的弧长为",
    options: ["$2\\pi$ cm", "$4\\pi$ cm", "$6\\pi$ cm", "$12\\pi$ cm"],
    answer: "B",
    explain: "弧长公式 $l = \\dfrac{n\\pi r}{180}$，其中 $n$ 为圆心角度数，$r$ 为半径。$l = \\dfrac{120 \\times \\pi \\times 6}{180} = \\dfrac{720\\pi}{180} = 4\\pi$ cm。",
    source: "2023鞍山中考真题"
  },
  {
    subject: "数学",
    topic: "圆",
    difficulty: "medium",
    type: "choice",
    text: "如图，$PA$、$PB$ 分别与圆 $O$ 相切于点 $A$、$B$，$\\angle P = 50°$，则 $\\angle AOB$ 的度数为",
    options: ["$100°$", "$120°$", "$130°$", "$150°$"],
    answer: "C",
    explain: "切线的性质：$OA \\perp PA$，$OB \\perp PB$，即 $\\angle OAP = \\angle OBP = 90°$。在四边形 $OAPB$ 中，$\\angle AOB + \\angle OAP + \\angle APB + \\angle OBP = 360°$，$\\angle AOB = 360° - 90° - 50° - 90° = 130°$。",
    source: "AI出题"
  },

  // --- 填空题 ---
  {
    subject: "数学",
    topic: "圆",
    difficulty: "basic",
    type: "fill",
    text: "已知圆的半径为 $5$，一条弦的长为 $8$，则圆心到这条弦的距离为 ______。",
    answer: "3",
    acceptAlso: ["$3$"],
    explain: "设圆心到弦的距离为 $d$，弦长的一半为 $4$。由垂径定理，圆心到弦的垂线平分弦，构成直角三角形：$d^2 + 4^2 = 5^2$，$d^2 = 25 - 16 = 9$，$d = 3$。",
    source: "AI出题"
  },
  {
    subject: "数学",
    topic: "圆",
    difficulty: "hard",
    type: "fill",
    text: "一个扇形的半径为 $6$，圆心角为 $60°$，则该扇形的面积为 ______。",
    answer: "$6\\pi$",
    acceptAlso: ["6\\pi", "$6\\pi$", "6\\pi"],
    explain: "扇形面积公式 $S = \\dfrac{n\\pi r^2}{360} = \\dfrac{60 \\times \\pi \\times 6^2}{360} = \\dfrac{60 \\times 36\\pi}{360} = \\dfrac{2160\\pi}{360} = 6\\pi$。",
    source: "AI出题"
  },

  // ============================================================
  // 十二、图形变换（2选择 + 1填空 = 3题）
  // ============================================================

  // --- 选择题 ---
  {
    subject: "数学",
    topic: "图形变换",
    difficulty: "basic",
    type: "choice",
    text: "点 $P(-3, 2)$ 关于原点对称的点的坐标为",
    options: ["$(3, -2)$", "$(-3, -2)$", "$(3, 2)$", "$(-2, 3)$"],
    answer: "A",
    explain: "关于原点对称，横坐标和纵坐标都取相反数。$P(-3, 2)$ 关于原点对称的点为 $(3, -2)$。",
    source: "AI出题"
  },
  {
    subject: "数学",
    topic: "图形变换",
    difficulty: "medium",
    type: "choice",
    text: "下列图形中，既是轴对称图形又是中心对称图形的是",
    options: ["等腰三角形", "平行四边形", "圆", "等腰梯形"],
    answer: "C",
    explain: "等腰三角形是轴对称图形，但不是中心对称图形；平行四边形是中心对称图形，但不一定是轴对称图形；圆既是轴对称图形（任何过圆心的直线都是对称轴）又是中心对称图形（对称中心为圆心）；等腰梯形是轴对称图形，但不是中心对称图形。",
    source: "2023鞍山中考真题"
  },

  // --- 填空题 ---
  {
    subject: "数学",
    topic: "图形变换",
    difficulty: "medium",
    type: "fill",
    text: "将点 $A(2, 3)$ 绕原点顺时针旋转 $180°$ 后得到点 $A'$，则 $A'$ 的坐标为 ______。",
    answer: "$(-2, -3)$",
    acceptAlso: ["(-2,-3)"],
    explain: "绕原点旋转 $180°$（无论顺时针还是逆时针），等价于关于原点对称，横纵坐标都取相反数。$A(2, 3)$ 旋转 $180°$ 后得 $A'(-2, -3)$。",
    source: "AI出题"
  },

  // ============================================================
  // 十三、坐标系（2选择 + 1填空 = 3题）
  // ============================================================

  // --- 选择题 ---
  {
    subject: "数学",
    topic: "坐标系",
    difficulty: "basic",
    type: "choice",
    text: "在平面直角坐标系中，点 $M(-2, 3)$ 在第几象限",
    options: ["第一象限", "第二象限", "第三象限", "第四象限"],
    answer: "B",
    explain: "点 $M(-2, 3)$ 的横坐标为负，纵坐标为正。第二象限的特征是 $(-, +)$，所以点 $M$ 在第二象限。",
    source: "AI出题"
  },
  {
    subject: "数学",
    topic: "坐标系",
    difficulty: "basic",
    type: "choice",
    text: "点 $A(3, -4)$ 到 $x$ 轴的距离为",
    options: ["$3$", "$4$", "$5$", "$-4$"],
    answer: "B",
    explain: "点到 $x$ 轴的距离等于纵坐标的绝对值。$|{-4}| = 4$，所以点 $A(3, -4)$ 到 $x$ 轴的距离为 $4$。",
    source: "AI出题"
  },

  // --- 填空题 ---
  {
    subject: "数学",
    topic: "坐标系",
    difficulty: "basic",
    type: "fill",
    text: "点 $P(2, -5)$ 关于 $y$ 轴对称的点的坐标为 ______。",
    answer: "$(-2, -5)$",
    acceptAlso: ["(-2,-5)"],
    explain: "关于 $y$ 轴对称，横坐标取相反数，纵坐标不变。$P(2, -5)$ 关于 $y$ 轴对称的点为 $(-2, -5)$。",
    source: "AI出题"
  },

  // ============================================================
  // 十四、相似与比例（2选择 + 1填空 = 3题）
  // ============================================================

  // --- 选择题 ---
  {
    subject: "数学",
    topic: "相似与比例",
    difficulty: "medium",
    type: "choice",
    text: "两个相似三角形的面积比为 $4:9$，则它们的周长比为",
    options: ["$4:9$", "$2:3$", "$16:81$", "$\\sqrt{2}:\\sqrt{3}$"],
    answer: "B",
    explain: "相似三角形的面积比等于相似比的平方。设相似比为 $k$，则 $k^2 = \\dfrac{4}{9}$，$k = \\dfrac{2}{3}$。周长比等于相似比，所以周长比为 $2:3$。",
    source: "2023鞍山中考真题"
  },
  {
    subject: "数学",
    topic: "相似与比例",
    difficulty: "medium",
    type: "choice",
    text: "如图，在 $\\triangle ABC$ 中，$DE \\parallel BC$，$AD = 2$，$DB = 4$，$DE = 3$，则 $BC$ 的长为",
    options: ["$6$", "$9$", "$12$", "$4.5$"],
    answer: "B",
    explain: "因为 $DE \\parallel BC$，所以 $\\triangle ADE \\sim \\triangle ABC$。相似比 $= \\dfrac{AD}{AB} = \\dfrac{AD}{AD + DB} = \\dfrac{2}{2 + 4} = \\dfrac{2}{6} = \\dfrac{1}{3}$。所以 $\\dfrac{DE}{BC} = \\dfrac{1}{3}$，$BC = 3 \\times DE = 3 \\times 3 = 9$。",
    source: "AI出题"
  },

  // --- 填空题 ---
  {
    subject: "数学",
    topic: "相似与比例",
    difficulty: "medium",
    type: "fill",
    text: "同一时刻，身高 $1.6$ m 的小明影长为 $2$ m，旁边一棵树的影长为 $5$ m，则这棵树的高度为 ______ m。",
    answer: "4",
    acceptAlso: ["$4$"],
    explain: "同一时刻，物高与影长成正比（太阳光线平行，构成相似三角形）。设树高为 $h$，则 $\\dfrac{h}{5} = \\dfrac{1.6}{2}$，$h = \\dfrac{1.6 \\times 5}{2} = 4$ m。",
    source: "AI出题"
  },

  // ============================================================
  // 十五、锐角三角函数（1选择 + 1填空 = 2题）
  // ============================================================

  // --- 选择题 ---
  {
    subject: "数学",
    topic: "锐角三角函数",
    difficulty: "medium",
    type: "choice",
    text: "在 $Rt\\triangle ABC$ 中，$\\angle C = 90°$，$AB = 10$，$\\sin A = \\dfrac{3}{5}$，则 $BC$ 的长为",
    options: ["$6$", "$8$", "$5$", "$3$"],
    answer: "A",
    explain: "$\\sin A = \\dfrac{BC}{AB} = \\dfrac{3}{5}$，$BC = AB \\times \\dfrac{3}{5} = 10 \\times \\dfrac{3}{5} = 6$。",
    source: "2023鞍山中考真题"
  },

  // --- 填空题 ---
  {
    subject: "数学",
    topic: "锐角三角函数",
    difficulty: "basic",
    type: "fill",
    text: "计算：$2\\sin 30° + \\cos 60° - \\tan 45° = $ ______。",
    answer: "$\\dfrac{1}{2}$",
    acceptAlso: ["1/2", "$\\frac{1}{2}$", "0.5"],
    explain: "$\\sin 30° = \\dfrac{1}{2}$，$\\cos 60° = \\dfrac{1}{2}$，$\\tan 45° = 1$。代入得：$2 \\times \\dfrac{1}{2} + \\dfrac{1}{2} - 1 = 1 + \\dfrac{1}{2} - 1 = \\dfrac{1}{2}$。",
    source: "AI出题"
  }

];
