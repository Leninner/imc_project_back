import { ComponentLoader } from 'adminjs'

const componentLoader = new ComponentLoader()

const BASE = './'

const bundle = (path: string, componentName: string) =>
  componentLoader.add(componentName, `${BASE}/${path}`)

const MyChartComponent = bundle('myChartComponent', 'MyChartComponent')

const ManyToManyEdit = bundle('editManyToManyInput', 'EditManyToManyInput')

const ManyToManyShow = bundle('manyToManyShow', 'ManyToManyShow')

const ManyToManyList = bundle('manyToManyList', 'ManyToManyList')

const Components = {
  ManyToManyEdit,
  ManyToManyShow,
  ManyToManyList,
  MyChartComponent,
}

export { Components, componentLoader }
