import React from 'react'
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function ConfirmOrders() {
  return (
    <div>
      <h3>주문 결과</h3>
      <Stack direction= "row" alignItems="center" justifyContent="center">
        <Link to='/CheckOrders'>
          <Button
            variant={'outlined'}>
            이전
          </Button>
        </Link>
        <Button
          variant={'outlined'}>
          확인
        </Button>
      </Stack>
    </div>
  )
}
