# matter.js
> 2D的物理引擎


## 1.引入matter.js
直接下载matter.js或者下载matter.min.js,然后在html文件中引入进来

## 2.documentation
### 1. engine
> creating and manipilatong engines

- methods
```js
var engine = Engine.create();
```
        
### 2. Bodies
> 创建物体。

  - 创建球体
```js
Matter.Bodies.circle(x,y,radius,[options],[maxSides])//初始坐标x，初始坐标y，圆的半径，属性，如isStatic
```
  - 创建不规则图形
```js
Matter.Bodies.fromVertices(x,y,vertexSets,[options], [flagInternal=false], [removeCollinear=0.01], [minimumArea=10], [removeDuplicatePoints=0.01])//图形位置x,y，图形坐标组
```
  - 创建多边形
```js
Matter.Bodies.polygon(x, y, sides, radius, [options])
```
  - 创建矩形
```js
Matter.Bodies.rectangle(x, y, width, height, [options])
```
  - 创建梯形
```js
Matter.Bodies.trapezoid(x, y, width, height, slope, [options])
```

#### tips：
1. 在创建不规则图形时，参数**vertexSets**为一个坐标数组，但是此坐标只负责图形的绘制，将坐标首位相连，控制图形位置的是参数**x**，**y**，所以绘制是需要注意图形的中心坐标点
2. 所有方法中的参数**options**都是一个对象，可以定义图形的属性（可自定义）



