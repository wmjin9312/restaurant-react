import React from 'react'
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function CheckOrders() {
  return (
    <div>
      <h3>주문 확인</h3>
      <Stack direction= "row" alignItems="center" justifyContent="center">
        <Link to='/ChooseMenu'>
          <Button
            variant={'outlined'}>
            이전
          </Button>
        </Link>
        <Link to='/ConfirmOrders'>
          <Button
            variant={'outlined'}>
            다음
          </Button>
        </Link>
      </Stack>
    </div>
  )
}
