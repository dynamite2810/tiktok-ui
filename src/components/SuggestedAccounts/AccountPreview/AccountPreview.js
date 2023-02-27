import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://kynguyenlamdep.com/wp-content/uploads/2022/06/anh-gai-xinh-cuc-dep.jpg"
                    alt=""
                />
                <div className={cx('follow-btn')}>
                    <Button primary small>
                        Follow
                    </Button>
                </div>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>quocnguyenphu</strong>
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
                </p>
                <p className={cx('name')}>Nguyễn Quốc Phú</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>followers</span>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
