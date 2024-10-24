#![allow(elided_lifetimes_in_paths)]
#![allow(clippy::wildcard_imports)]
pub use sea_orm_migration::prelude::*;

mod m20220101_000001_users;
mod m20231103_114510_notes;

mod m20241024_011708_leads;
pub struct Migrator;

#[async_trait::async_trait]
impl MigratorTrait for Migrator {
    fn migrations() -> Vec<Box<dyn MigrationTrait>> {
        vec![
            // inject-below (do not remove this comment)
            Box::new(m20241024_011708_leads::Migration),
            Box::new(m20220101_000001_users::Migration),
            Box::new(m20231103_114510_notes::Migration),
        ]
    }
}