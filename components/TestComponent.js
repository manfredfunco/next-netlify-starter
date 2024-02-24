import styles from './TestComponent.module.css'
/*
CSS Notes:
- The css file must be named [Component Name].module.css
*/
export default function TestComponent() {
  return (
    <>
        <div className={styles.testComponent}>
            THIS IS MY TEST COMPONENT
        </div>
    </>
  )
}
