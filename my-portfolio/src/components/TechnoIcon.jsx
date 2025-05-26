import PropTypes from "prop-types";

export const TechIcon = ({ component }) => {
    const Component = component;
    return <Component className="size-10"/>
};

TechIcon.PropTypes = {
    component: PropTypes.elementType.isRequired,
}