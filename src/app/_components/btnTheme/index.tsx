import { Button } from './btnTheme.styled';

interface Props {
    onClick: () => void;
    theme: 'light' | 'dark';
}

const BtnTheme: React.FC<Props> = ({ onClick, theme }) => {
    return (
        <Button onClick={onClick}>
            <span className="material-symbols-outlined">
            {theme === 'light' ? 'light_mode' : 'dark_mode'}
            </span>
            
        </Button>
    );
};



export default BtnTheme;

