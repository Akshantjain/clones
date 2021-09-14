import classNames from "classnames"

export const Buttons = ({className, children, onClick}) => {
    return (
        <button onClick={onClick} className={classNames(className, 'flex w-full items-center bg-transparent rounded-lg transition-colors duraion-150 ease-in-out font-semibold')}>
            {children}
        </button>
    )
}
