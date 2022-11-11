Адрес конракта RockPaperScissors: 0xF928bBd236E5eBC19BBF59F430db908E732C0d78

В папке **contract** лежит RockPaperScissors.  
В папке **front** пока лежит только файл hashToCommitTurn.js. Используется для получения хеша и числа для использования commitTurn.

Проверить игру с разными адресами можно, например, через Remix, поставив туда адрес контракта.

**Пример сценария**  
Игрок1 - login (1 gwei)  
Игрок2 - login (1 gwei)  
Игрок2 - commitTurn(0x11a33a5b89a9d1a8d59691307999b82e1f6994d52fb968ead61100fa5f150b35)  
Игрок1 - commitTurn(0xf65ed4c552560d8edf75e5e940647efd2331418e315a7ef6beb8e37eaa417e94)  
Игрок1 - revealTurn(1, 343054099) - true  
Игрок2 - revealTurn(2, 779317318) - false (должно быть 3 вместо 2)  
Игрок2 - getContractBalance() - 2 gwei  
Игрок2 - whoWon() - "you lose"  
Игрок1 - getMyBalance() - 2 gwei  
Игрок1 - whoWon() - "you won"  

**Тесты**  
Вроде бы все запрещенные действия я перекрыл.  
Единственное - не поставил ограничение на время ожидания.  
Таким образом, вся система виснет, если кто-то перестает играть.  