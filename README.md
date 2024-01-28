# activity-rings

<p align="center">
  Apple-style Activity Rings for React
</p>
<p align="center">
  Rendered as SVG, animated with react-spring
</p>
<p align="center">
  <img src="./docs/showcase.gif?raw=true width="400px" />
</p>

## Usage

### Example
```ts
<ActivityRings
  rings={[
    { value: 0.9 },
    { value: 0.6 },
    { value: 0.3 },
  ]}
/>
```

### Props

#### ActivityRingsProps
| Property  | Type                | Required | Default | Description                |
| --------- | ------------------- | -------- | ------- | -------------------------- |
| rings     | ActivityRingProps[] | yes      |         | Array describing each ring |
| width     | number \| string    | no       | 440px   | Size of resulting SVG      |
| ringWidth | number              | no       | 10      | Thickness of each ring, in SVG viewport units |
| animated  | boolean             | no       | true    | Should SVG animate on rings value changes |

#### ActivityRingProps
| Property | Type   | Required | Default              | Description            |
| -------- | ------ | -------- | -------------------- | ---------------------- |
| value    | number | yes      |                      | Value of the ring in percents, where 1 means full circle |
| color    | string | no       | see DefaultColors.ts | Main color of the ring |
