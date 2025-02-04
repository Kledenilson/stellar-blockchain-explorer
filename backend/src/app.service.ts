import { Injectable } from '@nestjs/common';
import * as StellarSdk from 'stellar-sdk';

@Injectable()
export class AppService {
  private server = new StellarSdk.Server('https://horizon.stellar.org');

  async getBlock(number: string) {
    try {
      const ledger = await this.server.ledgers().ledger(number).call();
      return ledger;
    } catch (error) {
      throw new Error(`Error fetching block: ${error.message}`);
    }
  }

  async getTransaction(hash: string) {
    try {
      const tx = await this.server.transactions().transaction(hash).call();
      return tx;
    } catch (error) {
      throw new Error(`Error fetching transaction: ${error.message}`);
    }
  }

  async getBalance(address: string) {
    try {
      const account = await this.server.accounts().accountId(address).call();
      return account.balances;
    } catch (error) {
      throw new Error(`Error fetching balance: ${error.message}`);
    }
  }
}