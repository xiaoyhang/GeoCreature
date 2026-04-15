# GeoCreature
A simple funny test to determine what GeoCreature you are, and get your personal Geo-traits report. Goes with a story of waking up in a strange math-land and exploring around.

Take the task to find more: https://xiaoyhang.github.io/GeoCreature/ 

## **分类逻辑**

采用维度得分制。每个生物在这些维度上都有一个固定的“坐标”。最后计算用户坐标与哪个生物的坐标欧氏距离最近。

我们可以定义 4 个维度（取值范围 0 到 1）：

C (Continuity): 离散(0) vs 连续(1)

M (Metric): 规则/原则(0) vs 灵活/非欧(1)

S (Smoothness): 粗糙/分形(0) vs 光滑(1)

H (Holiness/Connectivity): 封闭内核(0) vs 开放连通(1)

为每个几何生物设置特征向量 $V_creature=(c,m,s,h)$，用户的特征向量初始化在 $V_0=(0.5,0.5,0.5,0.5)$。答题过程中，每道题目的不同选项会对四个维度的坐标产生impact加分。答题结束后，对用户特征向量 V 进行归一化。计算它与每个生物向量的距离 $d_i=∣∣V−V_i||_2$，距离最小的生物 $i$ 就是用户的最终生物属性。

## **专属颜色与曲率计算**

**专属颜色 (Color)**：通过用户输入的数字 N1，映射到颜色环。 
- H=N1(mod360) 
- S=70%,L=60% (糖果色) 

**灵魂曲率 (Curvature)**：通过 N2 计算。 
- sin(N2), 结果在 [−1,1] 之间。 
- κ=Normalize(N2) 
- 结果描述：如果是正的，“你的灵魂是温暖的闭合球体”；如果是负的，“你的灵魂是自由开敞的马鞍面”。

## **科普 Toggle：**

在结果页底部有一个按钮，点击即可展开对该生物背后数学概念的浅显解释。（例如“什么是希尔伯特空间？”）