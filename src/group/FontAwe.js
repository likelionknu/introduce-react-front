import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// 사용할 아이콘 import
import { faPaintBrush } from "@fortawesome/free-solid-svg-icons";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { faTowerCell } from "@fortawesome/free-solid-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
// 사용할 아이콘을 라이브러리에 추가
// 카멜 표기법 활용
library.add( faPeopleGroup,faTowerCell,faPaintBrush,faDesktop);

<FontAwesomeIcon icon="fa-sharp fa-solid fa-pen-ruler" />