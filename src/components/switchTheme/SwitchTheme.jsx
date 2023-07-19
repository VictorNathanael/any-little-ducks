import ReactSwitch from 'react-switch';
import './SwitchTheme.css';

export default function SwitchTheme(props) {
    const toggleTheme = () => {
        props.setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
    };
    return (
        <div className='switch'>
            <ReactSwitch
                onChange={toggleTheme}
                checked={props.theme === 'dark'}
                height={15}
                width={30}
                offColor='#f4c430'
                onColor='#262626'
                offHandleColor='#f4c430'
                onHandleColor='#262626'
                activeBoxShadow='0px 8px 24px rgba(149, 157, 165, 0.2)'
                uncheckedIcon={false}
                uncheckedHandleIcon={
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100%',
                            marginRight: '1px',
                        }}
                    >
                        ☀️
                    </div>
                }
                checkedIcon={false}
                checkedHandleIcon={
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100%',
                            marginRight: '1px',
                        }}
                    >
                        🌑
                    </div>
                }
            />
        </div>
    );
}
