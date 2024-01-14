import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import axios, { AxiosInstance } from 'axios';
import { Model } from 'mongoose';

import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { PokeResponse } from './interfaces/poke-response.interface';

@Injectable()
export class SeedService {
  private readonly axios: AxiosInstance = axios

  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>
  ) {}

  async executeSeed() {

    await this.pokemonModel.deleteMany({}) // delete * from pokemons

    const { data } = await this.axios.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=650')

    const pokemonToinsert: { name: string, number: number }[] = []

    data.results.forEach(({ name, url}) => {
      const segments = url.split('/')
      const number:number = +segments[segments.length - 2]

      pokemonToinsert.push({name, number})
    })

    this.pokemonModel.insertMany(pokemonToinsert)
    return 'Seed excecuted.'
  }
}
