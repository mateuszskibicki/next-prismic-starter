import "../../scss/styles.scss"
import PropTypes from 'prop-types'

export const MainLayout = (props) => (
    <div className="container">
        {props.children}
    </div>
)

MainLayout.propTypes = {
    children: PropTypes.array
}