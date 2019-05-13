# Contar número de renders en React

React, normalmente, es rapido de por sí pero hay veces que podemos tener problemas de rendimiento debido a **renders innecesarios**. Hay bastantes herramientas para saber el número de veces que se renderizan nuestros componentes como por ejemplo [react-addons-perf](https://www.npmjs.com/package/react-addons-perf) **(no soportada en React 16 ☹️)**. Tambén podemos usar las **developers tools** de nuestro navegador para encontrar en que punto tenemos el problema. 

En caso de que no nos apetezca usar una herramienta externa podemos crear un componente que cuente los renders por nosotros. En mi caso, creé un componente muy tonto que lo que hace es poner un circulito con el número de renders encima del componente:

```javascript
import React from 'react'
import styled from 'styled-components'
import colors from '../../styles/colors'

const Counter = styled.div`
  color: white;
  float: right;
  background-color: ${colors.i4sMagenta};
  border-radius: 50%;
  padding: 5px 10px 5px 10px;
  position: relative;
  z-index: 5;
  top: -15px;
  right: -5px;
`

export default class CounterRender extends React.Component {

  constructor() {
    super()
    this.count = 1
  }

  componentWillUpdate() {
    this.count++
  }

  render() {
    return (
      <>
        <Counter>{this.count}</Counter>
        {this.props.children}
      </>
    )
  }
}
```

Para usarlo sería bastante fácil, solo hay que wrappear el componente que queremos saber el número de renders y listo:

```javascript
<CounterRender>
  <Mycomponent/>
</CounterRender>
```

Y se vería tal que así:

![](/static/images/react-render-count1.png)
