# matter.js
> 2D的物理引擎


## 1.引入matter.js
直接下载`matter.js`或者下载`matter.min.js`,然后在html文件中引入进来

## 2.开始学习

1. 创建引擎，渲染器，添加世界，，生成Bodies模型
```js
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
```

2. 创建Engine实例和world
```js
var engine = Engine.create(),
    world = engine.world;
```


3. 创建Render实例

```js
var render = Render.create({
        engine:engine,
        element:document.body
    })
```

以上参数中，element表示引擎渲染的对象是**html**网页的**body**，此处可以替换成我们希望渲染的html中的其他块。

4. 创建Bodies实例
```js
Matter.Bodies.rectangle(x, y, width, height, [options]);
```
创建了一个矩形物体，我们还可以创建圆形物体，正多边形物体，梯形物体，不规则形状物体等。如果想要创建墙体，只需要在**options**参数中定义对象`isStatic:true`。

5. 将物体添加进世界
```js
World.add(world,boxA)
```
此处有两个world,一定要注意大小写和区分。前一个**World**是指创建的表演环境，后一个**world**是指引擎世界。

6. 运行
```js
Engine.run(engine);
Render.run(render);
```
`Engine`是运行物理引擎，这个是没有办法肉眼看见的，所以为了使物理引擎更容易被观察，我们运行`Render`将物体的外形和运行轨迹**渲染**出来。

## 3.了解模块

### 1. 了解Bodies
> 创建物体。

  - 创建圆形
```js
Matter.Bodies.circle(x,y,radius,[options],[maxSides])//初始坐标x，初始坐标y，圆的半径，属性，如isStatic
```
  - 创建不规则图形
```js
Matter.Bodies.fromVertices(x,y,vertexSets,[options], [flagInternal=false], [removeCollinear=0.01], [minimumArea=10], [removeDuplicatePoints=0.01])//图形位置x,y，图形坐标组
```
  - 创建正多边形
```js
Matter.Bodies.polygon(x, y, sides, radius, [options])
```
  - 创建矩形
```js
Matter.Bodies.rectangle(x, y, width, height, [options])
```
  - 创建等腰梯形
```js
Matter.Bodies.trapezoid(x, y, width, height, slope, [options])//slope为梯形两边的斜率
```

#### tips：
1. 在创建不规则图形时，参数**vertexSets**为一个坐标数组，但是此坐标只负责图形的绘制，将坐标首位相连，控制图形重心位置的是参数**x**，**y**，所以绘制时需要注意图形的重心，提前将重心位置计算出来。

2. 所有方法中的参数**options**都是一个对象，可以定义图形的属性（可自定义）

### 2.了解World模块

> World实际上是一个`Composite`其中添加了`gravity`和`bounds`等其他属性。

#### 重要方法
- add(composite,object)

> 从`Composite`模块继承，可以向给定的`Composite`或`World`添加一个或者多个`Body`，`Composite`或者约束。
```js
World.add(engine.world,[boxA,boxB,groundWall])
```

- addBody(world,body)

> 添加**单个**`body`元素到指定世界
```js
World.addBody(engine.world,boxC)
```

- remove(composite,object,[deep = false])

> 从给定的`Composite`或者`World`中移除一个或者多个`Body`，`Composite`或者约束。 
```js
World.remove(engine.world,[topWall,leftWall])
```

除了上面几个常用的方法外，此模块还有`clear`,`rotate`,`scale`,`translate`等方法。需要注意`rotate`,`translate`方法不会给世界中的物体带来任何类型的速度，发生的任何运动只是不同物体形状或位置变化的结果。

### 3.了解Engine模块
> 物理引擎世界中引擎是必不可少的，在此模块中我们需要区分`World`和`engine.world`。

#### 重要方法
- create([options])
```js
var engine = Engine.create();
```

`Engine`模块中目前我比较熟悉的就是`create`方法，用于创建一个Engine实例。


### 4.了解Render模块
> 物理引擎世界中的物体都无法用肉眼观察，为了更好的体现物理引擎，我们使用Render模块将物体的形状和运动轨迹渲染出来

#### 重要方法
- create([options])
```js
var renter = Render.create({
    engine:engine,
    element:document.body
})
```

- run(obj)
```js
Render.run(render)
```

渲染模块最重要的就是创建和运行。`create`方法参数中的**element**决定了`matter.js`在**html**中的绘制位置，可以自己修改。
