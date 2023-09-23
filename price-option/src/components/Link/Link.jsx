import PropTypes from 'prop-types'; // ES6

const Link = ({route}) => {
    return (
        
        
        <li className="mr-5 hover:bg-yellow-600 px-6" >
                    <a href={route.path}>{route.name}</a>
                </li>
        
    );
};


Link.PropTypes =
{
    route:PropTypes.object
}

export default Link;