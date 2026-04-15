// 生物列表
const creatureProfiles = {
    Singleton: {
        title: "星火拓荒者 (The Singleton)",
        vector: [0.1, 0.1, 0.8, 0.9],
        core: "孤立点 / 离散拓扑",
        space: "离散度量空间",
        persona: "你极其独立，世界对你而言是由无数闪耀的瞬间组成的。你不依附于连续的群体，在孤寂中拥有最清醒的引力场。",
        concept: "离散拓扑",
        desc: "在离散拓扑空间中，每一个点都是开集，这意味着每个个体都可以独立于他人存在，不被外界轻易渗透。"
    },
    PerfectBall: {
        title: "圆满哲学家 (The Perfect Ball)",
        vector: [0.9, 0.1, 1.0, 0.9],
        core: "高阶光滑 / L² 范数",
        space: "黎曼流形",
        persona: "情绪极其稳定的社交达人。你能够用最圆融的方式化解摩擦，让一切事物在你的场域里丝滑运转。",
        concept: "光滑流形",
        desc: "指处处具有切空间且变化连续的空间。代表了一种极高的适应能力和处理复杂关系的‘圆滑’智慧。"
    },
    FilledTorus: {
        title: "琥珀藏心者 (The Filled Torus)",
        vector: [0.8, 0.2, 0.8, 0.1],
        core: "非单连通 / 亏格 > 0",
        space: "三维欧氏空间",
        persona: "温润如玉，外表圆融。但在你的内心深处，永远藏着一个不为人知的、独立运作的内核，那是你最深的秘密。",
        concept: "单连通性",
        desc: "琥珀藏心者内部有一个‘洞’或嵌套核，使得某些情感路径永远无法被外界抹平，象征着独特的心理防御与深度。"
    },
    Manhattan: {
        title: "秩序建筑师 (The Manhattan Cube)",
        vector: [0.4, 0.1, 0.2, 0.8],
        core: "L¹ 范数单位球 / 刚性边界",
        space: "赋范线性空间",
        persona: "你极具原则感。在你的世界里，两点之间最诚实的路是由坚定的直角构成的，你拒绝一切投机取巧的捷径。",
        concept: "曼哈顿距离",
        desc: "不同于直线距离，它是两点在坐标轴上的绝对差值之和。象征着一种克制、规整、步步为营的人生哲学。"
    },
    Weierstrass: {
        title: "繁花守望者 (The Weierstrass Flora)",
        vector: [0.8, 0.8, 0.0, 0.5],
        core: "分形曲线 / 处处不可导",
        space: "非整数维空间",
        persona: "你拥有无限的细节美。普通人看一眼就略过，你却能在微小的转折中发现层层嵌套的宏大宇宙。",
        concept: "分形 (Fractal)",
        desc: "分形具有自相似性，无论放大多少倍其结构依然复杂。这代表了一种在细节中寻找无穷规律的思维方式。"
    },
    Dirichlet: {
        title: "云端漫步者 (The Dirichlet Cloud)",
        vector: [0.2, 0.7, 0.0, 0.9],
        core: "稠密函数 / 处处不连续",
        space: "希尔伯特空间",
        persona: "灵动而神秘。你的思维具有量子般的跳跃美，在不同的频率间闪烁，让常人难以捉摸却又心生向往。",
        concept: "希尔伯特空间",
        desc: "这是一个完备的内积空间。它能容纳最复杂的函数变化，象征着无限的潜能与跳跃式的思考逻辑。"
    },
    Mobius: {
        title: "无尽衔尾蛇 (The Mobius Loop)",
        vector: [0.9, 0.7, 0.9, 1.0],
        core: "单侧曲面 / 紧致流形",
        space: "不可定向流形",
        persona: "你是一个纯粹且一致的整体。在你的字典里没有‘正反面’，你的起始亦是终点，内外在达成了奇妙的统一。",
        concept: "莫比乌斯带",
        desc: "这是一个只有一个面和一个边界的曲面。它代表了打破二元对立的思维方式，是一种极其稳定的逻辑闭环。"
    },
    LightCone: {
        title: "极光观测员 (The Light Cone)",
        vector: [0.9, 1.0, 0.9, 0.7],
        core: "闵氏因果结构 / 时空流形",
        space: "闵可夫斯基时空",
        persona: "你极其看重时机与因果。你总能从错综复杂的线索中，精准预判哪些事会成为改变命运的‘奇点’。",
        concept: "闵可夫斯基空间",
        desc: "狭义相对论的基础数学模型。它定义了‘过去’与‘未来’的因果边界，象征对宏观规律的精准掌握。"
    }
};

const questions = [
    {
        text: "地平线的尽头是什么样子的？",
        options: [
            { text: "无数颗像萤火虫一样的星光点，各自闪烁", impact: { c: -0.2, m: -0.1 } },
            { text: "一条平滑、无限延伸的丝绸之路", impact: { c: 0.2, s: 0.1 } },
            { text: "翻滚的云雾，有时清晰，有时又融入虚无", impact: { c: 0.1, s: -0.2 } }
        ]
    },
    {
        text: "你低头观察脚下的草丛，发现叶子的脉络：",
        options: [
            { text: "每一片都精准对称，像是严谨的绘图", impact: { s: 0.2, m: -0.1 } },
            { text: "脉络里又套着脉络，无限细分，极其华丽", impact: { s: -0.2, m: 0.1 } },
            { text: "脉络随着光线若隐若现，像是一场流动的实验", impact: { s: -0.1, c: 0.1 } }
        ]
    },
    {
        text: "你想尝试与这个世界沟通，你的第一反应是：",
        options: [
            { text: "寻找逻辑的规律，给万物分类", impact: { c: -0.1, m: -0.1 } },
            { text: "感受整体的氛围，沉浸在色彩中", impact: { c: 0.2, m: 0.1 } },
            { text: "闭上眼，在脑海中勾勒一个抽象的轮廓", impact: { c: 0.1, h: -0.1 } }
        ]
    },
    {
        text: "你选择的行进方式是？",
        options: [
            { text: "既然目标在前方，我就要笔直地穿过去", impact: { m: -0.2, s: 0.1 } },
            { text: "即使在荒野，我也喜欢像在城市棋盘那样规整地转弯", impact: { m: -0.1, s: -0.1 } },
            { text: "随心而动，路径的长度并不重要，重要的是到达时的喜悦", impact: { m: 0.2 } }
        ]
    },
    {
        text: "你向东走100步，向北走100步，再向西走100步，最后向南走100步。你惊讶地发现：",
        options: [
            { text: "你精准地回到了出发的小石墩旁", impact: { m: -0.2 } },
            { text: "你离原点还有一小段距离，这片原野似乎在微微隆起", impact: { m: 0.2 } },
            { text: "你走得比预想的远，感觉空间在向内凹陷", impact: { m: 0.3 } }
        ]
    },
    {
        text: "路上遇到了一道裂谷，你发现对岸站着另一个“你”。你觉得你们之间的距离：",
        options: [
            { text: "只要我们心意相通，距离就是零；否则就是无穷远", impact: { c: -0.2, m: -0.1 } },
            { text: "是一段可以被精准测量的跨度", impact: { m: -0.2 } },
            { text: "取决于我们看对方的角度", impact: { m: 0.3 } }
        ]
    },
    {
        text: "你摸到了一株“几何仙人掌”，它表面布满了极其细密的突起：",
        options: [
            { text: "虽然看起来复杂，但指尖传来的触感却有种规律的韵律美", impact: { s: -0.2, m: 0.1 } },
            { text: "你的指尖感受到一种微微的酥麻，那是生命力的震荡", impact: { s: -0.3, c: -0.1 } },
            { text: "你更希望它是一个光滑的果冻球，触碰起来毫无阻力", impact: { s: 0.3 } }
        ]
    },
    {
        text: "如果这片原野突然下了一场雨，打乱了你的旅行计划，你会：",
        options: [
            { text: "静静欣赏雨滴落下的随机图案，觉得这也是旅行的一部分", impact: { s: 0.2 } },
            { text: "迅速在脑海中生成一套全新的备选方案，捕捉新的乐趣", impact: { s: -0.1, c: 0.1 } },
            { text: "觉得这场雨是某种命运的转折点，观察它带来的因果变化", impact: { m: 0.2, h: -0.1 } }
        ]
    },
    {
        text: "你发现了一面镜子，镜子里的你竟然只有一面，没有“反面”：",
        options: [
            { text: "这太酷了，我是一个纯粹且一致的整体", impact: { m: 0.2, h: 0.2 } },
            { text: "我感到好奇，这说明我比别人多了一个维度的视角", impact: { m: 0.1, c: 0.1 } },
            { text: "我试图寻找镜子的边界，看看到底在哪里发生扭转", impact: { m: 0.2 } }
        ]
    },
    {
        text: "你觉得你的内心空间更像：",
        options: [
            { text: "一个透明的、盛满月光的玻璃球", impact: { h: 0.3 } },
            { text: "一个精巧的琥珀，中心包裹着一颗永恒的黑珍珠", impact: { h: -0.3 } },
            { text: "一个永不停歇的喷泉，水流循环往复", impact: { h: -0.1, m: 0.1 } }
        ]
    },
    {
        text: "在社交篝火旁，你倾向于：",
        options: [
            { text: "成为那个照亮周围的中心点", impact: { c: -0.2 } },
            { text: "游走在人群边缘，观察每个人的因果脉络", impact: { m: 0.2, c: 0.1 } },
            { text: "与每个人都保持一种恰到好处的、几何对称的礼貌", impact: { m: -0.2, s: 0.1 } }
        ]
    },
    {
        text: "当你深思一个复杂问题时，你的思维更像：",
        options: [
            { text: "一束激光，直击靶心", impact: { s: 0.2, c: 0.1 } },
            { text: "一座宏伟的万花筒，无数碎片拼凑出真理", impact: { s: -0.2, c: 0.1 } },
            { text: "一场即兴的爵士乐，音符之间有奇妙的跳跃", impact: { s: -0.1, c: -0.2 } }
        ]
    },
    {
        text: "你抬头看星空，觉得时间是：",
        options: [
            { text: "均匀滴落的水滴", impact: { m: -0.2 } },
            { text: "随着你的奔跑而伸缩的道路", impact: { m: 0.3 } },
            { text: "一本已经写好、但每一页都在同时发生的书", impact: { m: 0.1, h: 0.1 } }
        ]
    },
    {
        text: "如果你能改变这个世界的物理常数，你希望：",
        options: [
            { text: "让引力消失，万物皆可漂浮", impact: { m: 0.2, s: -0.1 } },
            { text: "让光速变慢，我们可以看清时间的流逝", impact: { m: 0.3 } },
            { text: "让所有图形都变成圆滚滚的样子", impact: { s: 0.3, m: -0.2 } }
        ]
    }
];

// 匹配算法
function calculateResult(userScore) {
    let minDistance = Infinity;
    let closestCreature = "";

    for (const [key, profile] of Object.entries(creatureProfiles)) {
        // 计算 4 维欧氏距离
        const dist = Math.sqrt(
            Math.pow(userScore.c - profile.vector[0], 2) +
            Math.pow(userScore.m - profile.vector[1], 2) +
            Math.pow(userScore.s - profile.vector[2], 2) +
            Math.pow(userScore.h - profile.vector[3], 2)
        );

        if (dist < minDistance) {
            minDistance = dist;
            closestCreature = key;
        }
    }
    return closestCreature;
}


let currentIdx = 0;
let userAnswers = [];

function startQuiz() {
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('quiz-screen').style.display = 'block';
    showQuestion();
}

function showQuestion() {
    const q = questions[currentIdx];
    document.getElementById('question-text').innerText = `${currentIdx + 1}. ${q.text}`;
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';

    q.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.innerText = opt.text;
        btn.className = 'option-btn';
        if (userAnswers[currentIdx] === index) btn.classList.add('selected');
        btn.onclick = () => selectOption(index);
        optionsDiv.appendChild(btn);
    });

    document.getElementById('progress').style.width = `${((currentIdx + 1) / questions.length) * 100}%`;
    document.getElementById('prev-btn').disabled = currentIdx === 0;
    document.getElementById('next-btn').disabled = userAnswers[currentIdx] === undefined;
}

function selectOption(idx) {
    userAnswers[currentIdx] = idx;
    showQuestion();
}

function nextQuestion() {
    if (currentIdx < questions.length - 1) {
        currentIdx++;
        showQuestion();
    } else {
        document.getElementById('quiz-screen').style.display = 'none';
        document.getElementById('input-screen').style.display = 'block';
    }
}

function prevQuestion() {
    if (currentIdx > 0) {
        currentIdx--;
        showQuestion();
    }
}

function showResult() {
    // 1. 获取用户输入的随机因子
    const num1 = parseInt(document.getElementById('num1').value) || 0;
    const num2 = parseFloat(document.getElementById('num2').value) || 0;

    // 2. 初始化用户的属性向量 (中位数为 0.5)
    let userVector = { c: 0.5, m: 0.5, s: 0.5, h: 0.5 };

    // 3. 遍历用户答案，累加 impact
    userAnswers.forEach((ansIdx, qIdx) => {
        const impact = questions[qIdx].options[ansIdx].impact;
        if (impact) {
            for (let dim in impact) {
                userVector[dim] += impact[dim];
            }
        }
    });

    // 4. 归一化：确保每个维度都在 [0, 1] 之间
    for (let dim in userVector) {
        userVector[dim] = Math.max(0, Math.min(1, userVector[dim]));
    }

    // 5. 欧氏距离计算：寻找距离最近的生物
    let winner = "";
    let minDistance = Infinity;

    for (let key in creatureProfiles) {
        const profile = creatureProfiles[key];
        const dist = Math.sqrt(
            Math.pow(userVector.c - profile.vector[0], 2) +
            Math.pow(userVector.m - profile.vector[1], 2) +
            Math.pow(userVector.s - profile.vector[2], 2) +
            Math.pow(userVector.h - profile.vector[3], 2)
        );

        if (dist < minDistance) {
            minDistance = dist;
            winner = key;
        }
    }

    const result = creatureProfiles[winner];

    // 6. 随机算法：利用输入值生成专属特征
    // 曲率根据 num2 的正弦值映射，颜色根据 num1 的色相映射
    const curvature = Math.sin(num2).toFixed(4);
    const hue = Math.abs(num1) % 360;
    const color = `hsl(${hue}, 55%, 65%)`; // 复古感饱和度

    // 7. UI 填充与切换
    document.getElementById('input-screen').style.display = 'none';
    document.getElementById('result-screen').style.display = 'block';

    document.getElementById('creature-title').innerText = result.title;
    document.getElementById('math-core').innerText = result.core;
    document.getElementById('life-space').innerText = result.space;
    document.getElementById('persona-text').innerText = result.persona;

    document.getElementById('curvature-val').innerText = curvature;
    document.getElementById('color-hex').innerText = `HSL(${hue}, 55, 65)`;

    // 给视觉展示框上色
    const visual = document.getElementById('creature-visual');
    visual.style.backgroundColor = color;
    visual.style.boxShadow = `0 0 20px ${color}`;

    // 填充底部的数学概念解释
    document.getElementById('concept-name').innerText = result.concept;
    document.getElementById('concept-desc').innerText = result.desc;
    // 默认收起解释
    document.getElementById('concept-detail').style.display = 'none';
}

function toggleConcept() {
    const detail = document.getElementById('concept-detail');
    detail.style.display = detail.style.display === 'none' ? 'block' : 'none';
}