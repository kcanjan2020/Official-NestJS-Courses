import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get('flavors')
  findAll(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery;
    return `This action return all coffees: ${limit}, offset:${offset}`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns #${id} coffee`;
  }

  @Post()
  @HttpCode(HttpStatus.GONE)
  create(@Body() body) {
    // res.send(req.body);
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    console.log('body', body);

    return `This action update #${id} coffee`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes #${id} coffee`;
  }
}
