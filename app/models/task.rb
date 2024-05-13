# frozen_string_literal: true
class Task < ApplicationRecord
  validates :title, :description, presence: true
  belongs_to :category
  belongs_to :user
end
