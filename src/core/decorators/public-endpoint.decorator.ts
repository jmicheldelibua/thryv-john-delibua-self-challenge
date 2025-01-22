import { IS_PUBLIC_KEY } from '@core/constant';
import { SetMetadata } from '@nestjs/common';

const Public = () => SetMetadata(IS_PUBLIC_KEY, true);

export { Public };